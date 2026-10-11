# Contributing to mdlite

Thanks for your interest. Follow these rules — PRs that skip any step will be asked to fix before merge.

## Rules

1. **Branch naming:** `fix/<issue-number>-short-description` or `feat/short-description`
2. **Tests required:** every change must include a test. Bug fixes must have a test that fails on the old code and passes after your fix.
3. **Black formatting:** run `black src/ tests/` before committing. CI will fail if formatting is wrong.
4. **CI must pass:** all tests and the formatter check run on every PR. Do not open a PR with a red CI.
5. **Fill in the PR checklist:** the pull request template has a short checklist. Complete every item.

## Setup

```bash
pip install -r requirements.txt
pip install black
```

## Opening an issue first

If you want to fix something not already in the tracker, open an issue first and wait for a response.
