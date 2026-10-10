# notes.py — v1.0.0
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

    # BUG 1: No check for empty title after stripping whitespace.
    # If title is "" or "   ", clean_title will be "" and the note
    # is saved with a blank title. No error is raised.
    clean_title = title.strip()

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
    or raises KeyError if the ID does not exist.
    """
    # BUG 2: No check whether note_id exists before deleting.
    # If the caller passes an ID that was already deleted or never existed,
    # this raises an unhandled KeyError instead of returning a clean error.
    del _notes[note_id]
    return {"status": "deleted"}


def search_notes(query):
    """Search notes by title.

    Returns a list of notes whose title contains the query string.
    """
    results = []
    for note in _notes.values():
        # BUG 3: Case-sensitive comparison.
        # search_notes("shopping") will not find a note titled "Shopping List".
        # Fix is to compare both strings lowercased.
        if query in note["title"]:
            results.append(note)
    return results


def list_notes():
    """Return all saved notes as a list."""
    # BUG 4: Returns a direct reference to the internal dict's values view
    # converted to a list — but each note dict inside is still the live object.
    # A caller who does list_notes()[0]["title"] = "hacked" will silently
    # corrupt the internal store.
    return list(_notes.values())


def get_note(note_id):
    """Return a single note by ID, or None if it does not exist."""
    return _notes.get(note_id)


def clear_all():
    """Remove all notes. Used in tests to reset state between runs."""
    global _next_id
    _notes.clear()
    _next_id = 1
