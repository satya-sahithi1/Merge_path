# notes-app

A minimal command-line notes manager written in Python. Supports creating, listing, searching, and deleting notes. Intended as a small learning project.

## Requirements

- Python 3.10 or higher
- pytest (for running tests)

## Installation

```bash
git clone https://github.com/tariq-dev/notes-app.git
cd notes-app
pip install -r requirements.txt
```

## Usage

```python
from src.notes import save_note, list_notes, search_notes, delete_note

# Save a note
save_note(title="Shopping list", body="milk, eggs, bread")

# List all notes
notes = list_notes()
print(notes)

# Search by title
results = search_notes("shopping")
print(results)

# Delete a note by ID
delete_note(1)
```

## Running tests

```bash
pytest tests/
```

All tests should pass before you open a pull request.

## Project structure

```
notes-app/
├── src/
│   └── notes.py        # core notes logic
├── tests/
│   └── test_notes.py   # regression tests
├── requirements.txt
├── README.md
└── CONTRIBUTING.md
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

MIT
