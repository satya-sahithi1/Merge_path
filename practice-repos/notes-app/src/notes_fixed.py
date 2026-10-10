# notes_fixed.py — v1.1.0
# A simple in-memory notes manager.
# Supports creating, listing, searching, and deleting notes.

_notes = {}
_next_id = 1


def save_note(title, body=""):
    """Save a new note with a title and optional body.

    Returns a dict with 'status' and 'id' on success,
    or 'error' on failure.
    """
    global _next_id

    clean_title = title.strip()

    # FIX 1: Check for empty title after stripping whitespace.
    # Returns a clean error dict instead of saving a blank note.
    if not clean_title:
        return {"error": "Title cannot be empty."}

    note = {
        "id": _next_id,
        "title": clean_title,
        "body": body,
    }
    _notes[_next_id] = note
    _next_id += 1
    return {"status": "saved", "id": note["id"]}


def delete_note(note_id):
    """Delete a note by its integer ID.

    Returns a dict with 'status' on success,
    or 'error' if the ID does not exist.
    """
    # FIX 2: Check if the note exists before deleting.
    # Returns a clean error dict instead of raising KeyError.
    if note_id not in _notes:
        return {"error": f"Note with id {note_id} does not exist."}
    del _notes[note_id]
    return {"status": "deleted"}


def search_notes(query):
    """Search notes by title (case-insensitive).

    Returns a list of notes whose title contains the query string.
    """
    results = []
    # FIX 3: Lowercase both the query and the title before comparing.
    # search_notes("shopping") now correctly finds "Shopping List".
    for note in _notes.values():
        if query.lower() in note["title"].lower():
            results.append(note)
    return results


def list_notes():
    """Return all saved notes as a list of copies."""
    # FIX 4: Return shallow copies of each note dict so callers
    # cannot silently mutate the internal store.
    return [dict(note) for note in _notes.values()]


def get_note(note_id):
    """Return a single note by ID, or None if it does not exist."""
    return _notes.get(note_id)


def clear_all():
    """Remove all notes. Used in tests to reset state between runs."""
    global _next_id
    _notes.clear()
    _next_id = 1
