# Contributing to notes-app

Thanks for your interest in contributing. This is a small project — contributions are welcome, but please read this first.

## Before you start

- Check the open issues. If you want to work on one, **leave a comment on the issue first** and wait for a response. This avoids two people working on the same thing.
- If you find a new bug, open an issue before submitting a PR. Describe the bug, steps to reproduce, and the Python version you're using.
- One issue per PR. Don't bundle multiple fixes into one pull request.

## Setup

```bash
git clone https://github.com/tariq-dev/notes-app.git
cd notes-app
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Running tests

```bash
pytest tests/
```

All tests must pass before you open a PR. If you're fixing a bug, add a test that fails on the buggy code and passes after your fix.

## Branch naming

Use this format:

```
fix/issue-<number>-short-description
feat/short-description
docs/short-description
```

Examples:
- `fix/issue-12-empty-title-validation`
- `docs/update-readme-usage`

## Opening a pull request

- Link the issue your PR fixes using `Fixes #<issue-number>` in the PR description.
- Keep the PR small. A focused change is easier to review and faster to merge.
- Describe what you changed and why — not just what files you touched.
- Don't ping the maintainer repeatedly. Reviews happen within a week or so.

## Code style

- Follow the existing style in `notes.py` — no external formatters required.
- Add docstrings to any new functions.
- Keep functions small and focused.

## What counts as a contribution

- Bug fixes with tests
- Documentation improvements
- Clearer error messages

**What we won't merge:**
- Whitespace-only changes
- Reformatting without functional changes
- AI-generated code that the contributor hasn't read, tested, or understood
