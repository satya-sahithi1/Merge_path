# Contributing to gradewise

Thanks for your interest. This is a small learning project — contributions are very welcome.

## Before you start

- Check the open issues. If you want to work on one, **leave a comment first** and wait for a response. This avoids duplicating effort.
- If you find a new bug, open an issue before submitting a PR.
- One issue per PR.

## Setup

```bash
git clone https://github.com/amaan-dev/gradewise.git
cd gradewise
pip install -r requirements.txt
```

## Running tests

```bash
pytest tests/
```

All tests must pass. If you're fixing a bug, add a test that fails on the original code and passes after your fix.

## Branch naming

```
fix/issue-<number>-short-description
feat/short-description
docs/short-description
```

## Opening a pull request

- Use `Fixes #<issue-number>` in the description.
- Keep it small and focused.
- Respond to review feedback — we try to reply within 1–2 days.
