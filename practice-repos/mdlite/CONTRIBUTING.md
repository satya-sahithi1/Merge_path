# Contributing to mdlite

Thanks for your interest in contributing.

## Before you start

Check the open issues. If you want to work on one, leave a comment first and wait for a reply. This avoids two people working on the same thing.

If you find a new bug, open an issue before submitting a PR.

## Setup

```bash
pip install -r requirements.txt
pip install black
```

## Branch naming

Use `<type>/<short-desc>`, for example:

- `fix/trailing-spaces`
- `test/empty-input`
- `docs/readme-typo`

## Rules

1. Every change needs a test. Bug fixes need a test that fails before and passes after.
2. Run `black src/ tests/` before pushing. CI checks formatting.
3. One issue per PR. Do not bundle fixes.
4. Link the issue your PR fixes with `Fixes #<number>` in the description.
