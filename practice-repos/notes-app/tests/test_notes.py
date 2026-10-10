"""
Regression tests for notes-app.

Each test class covers one bug. Within each class:
- test_buggy_*  shows the wrong behavior in v1.0.0
- test_fixed_*  shows the correct behavior in v1.1.0

These tests are the source of truth for the scenario JSON.
If they pass, verifiedByTest can be set to true in issues.json.
"""

import sys
import os

# Make sure both src modules are importable
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

import pytest
from src.notes import (
    save_note, delete_note, search_notes, list_notes, clear_all
)
from src.notes_fixed import (
    save_note as save_note_fixed,
    delete_note as delete_note_fixed,
    search_notes as search_notes_fixed,
    list_notes as list_notes_fixed,
    clear_all as clear_all_fixed,
)


# ---------------------------------------------------------------------------
# Reset state before every test so tests don't bleed into each other
# ---------------------------------------------------------------------------

@pytest.fixture(autouse=True)
def reset_state():
    clear_all()
    clear_all_fixed()
    yield
    clear_all()
    clear_all_fixed()


# ---------------------------------------------------------------------------
# Bug 1 — Empty title is saved silently (no validation)
# Lesson: genuine_good_pick  |  regressionTestId: notes-app/empty-title-crash
# ---------------------------------------------------------------------------

class TestEmptyTitle:

    def test_buggy_empty_title_saves_silently(self):
        """v1.0.0: saving with an empty title succeeds — wrong behavior."""
        result = save_note(title="", body="some content")
        # Bug: no error returned, note is saved with blank title
        assert result.get("status") == "saved"
        assert result.get("error") is None

    def test_buggy_whitespace_only_title_saves_silently(self):
        """v1.0.0: whitespace-only title also saves silently."""
        result = save_note(title="   ", body="some content")
        assert result.get("status") == "saved"

    def test_fixed_empty_title_returns_error(self):
        """v1.1.0: empty title returns a validation error."""
        result = save_note_fixed(title="", body="some content")
        assert result.get("error") == "Title cannot be empty."
        assert result.get("status") is None

    def test_fixed_whitespace_only_title_returns_error(self):
        """v1.1.0: whitespace-only title also returns a validation error."""
        result = save_note_fixed(title="   ", body="some content")
        assert result.get("error") == "Title cannot be empty."

    def test_fixed_valid_title_saves_successfully(self):
        """v1.1.0: a valid title saves correctly."""
        result = save_note_fixed(title="Shopping list", body="milk, eggs")
        assert result.get("status") == "saved"
        assert "id" in result


# ---------------------------------------------------------------------------
# Bug 2 — Delete crashes with KeyError on invalid ID
# Lesson: claimed_never_started  |  regressionTestId: notes-app/delete-keyerror
# ---------------------------------------------------------------------------

class TestDeleteInvalidId:

    def test_buggy_delete_nonexistent_raises_keyerror(self):
        """v1.0.0: deleting a non-existent ID raises KeyError."""
        with pytest.raises(KeyError):
            delete_note(999)

    def test_buggy_delete_already_deleted_raises_keyerror(self):
        """v1.0.0: deleting an already-deleted note raises KeyError."""
        save_note(title="Temp note")
        delete_note(1)
        with pytest.raises(KeyError):
            delete_note(1)  # second delete crashes

    def test_fixed_delete_nonexistent_returns_error(self):
        """v1.1.0: deleting a non-existent ID returns a clean error dict."""
        result = delete_note_fixed(999)
        assert result.get("error") == "Note with id 999 does not exist."

    def test_fixed_delete_valid_id_succeeds(self):
        """v1.1.0: deleting a valid ID works correctly."""
        save_note_fixed(title="Temp note")
        result = delete_note_fixed(1)
        assert result.get("status") == "deleted"


# ---------------------------------------------------------------------------
# Bug 3 — Search is case-sensitive
# Lesson: good_first_issue_hard  |  regressionTestId: notes-app/search-case-sensitive
# ---------------------------------------------------------------------------

class TestCaseSensitiveSearch:

    def test_buggy_search_misses_different_case(self):
        """v1.0.0: searching 'shopping' does not find 'Shopping List'."""
        save_note(title="Shopping List", body="milk, eggs")
        results = search_notes("shopping")
        # Bug: returns empty list because comparison is case-sensitive
        assert results == []

    def test_buggy_search_only_finds_exact_case(self):
        """v1.0.0: only exact case match works."""
        save_note(title="Shopping List", body="milk, eggs")
        results = search_notes("Shopping")
        assert len(results) == 1

    def test_fixed_search_is_case_insensitive(self):
        """v1.1.0: searching 'shopping' correctly finds 'Shopping List'."""
        save_note_fixed(title="Shopping List", body="milk, eggs")
        results = search_notes_fixed("shopping")
        assert len(results) == 1
        assert results[0]["title"] == "Shopping List"

    def test_fixed_search_uppercase_query(self):
        """v1.1.0: uppercase query also finds lowercase titles."""
        save_note_fixed(title="meeting notes", body="discussed roadmap")
        results = search_notes_fixed("MEETING")
        assert len(results) == 1


# ---------------------------------------------------------------------------
# Bug 4 — list_notes returns mutable internal state
# Lesson: no_reproduction_steps  |  regressionTestId: notes-app/mutable-list
# ---------------------------------------------------------------------------

class TestMutableListReturn:

    def test_buggy_caller_can_corrupt_internal_state(self):
        """v1.0.0: mutating a note from list_notes corrupts the store."""
        save_note(title="Original title", body="body")
        notes = list_notes()
        # Mutate the returned object
        notes[0]["title"] = "Corrupted"
        # The internal store is now corrupted
        from src.notes import get_note
        stored = get_note(1)
        assert stored["title"] == "Corrupted"  # bug: internal state changed

    def test_fixed_caller_cannot_corrupt_internal_state(self):
        """v1.1.0: mutating a note from list_notes does not affect the store."""
        save_note_fixed(title="Original title", body="body")
        notes = list_notes_fixed()
        notes[0]["title"] = "Attempted corruption"
        from src.notes_fixed import get_note as get_note_fixed
        stored = get_note_fixed(1)
        assert stored["title"] == "Original title"  # fix: internal state safe
