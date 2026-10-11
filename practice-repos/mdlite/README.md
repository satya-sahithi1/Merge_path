# mdlite

A small Python library that converts Markdown to HTML. Handles headings, paragraphs, bold, italic, inline code, links, and flat lists.

## Requirements

- Python 3.10 or higher
- pytest (for running tests)

## Installation

```bash
git clone https://github.com/riya-dev/mdlite.git
cd mdlite
pip install -r requirements.txt
```

## Usage

```python
from src.mdlite import render

html = render("# Hello\n\nThis is **bold** and *italic*.")
print(html)
# <h1>Hello</h1>
# <p>This is <strong>bold</strong> and <em>italic</em>.</p>
```

## Running tests

```bash
pytest tests/
```

All tests must pass before you open a pull request. See CONTRIBUTING.md.

## Supported syntax

| Syntax | Output |
|---|---|
| `# Heading` | `<h1>` |
| `**bold**` or `__bold__` | `<strong>` |
| `*italic*` | `<em>` |
| `` `code` `` | `<code>` |
| `[text](url)` | `<a>` |
| `- item` | `<ul><li>` |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

MIT
