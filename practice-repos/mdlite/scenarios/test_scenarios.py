"""
Scenario regression tests for mdlite.

Hidden from the learner. These verify the buggy/fixed behavior
described in issues.json so verifiedByTest can be set to true.

Each class maps to a regressionTestId in issues.json.
"""

import sys
import os
import importlib.util

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.insert(0, REPO_ROOT)


def _load(rel_path):
    abs_path = os.path.join(REPO_ROOT, rel_path)
    spec = importlib.util.spec_from_file_location("_scenario_mod", abs_path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


_old3  = _load("scenarios/history/issue-3/mdlite_old.py")
_fix5  = _load("scenarios/fixes/issue-5/mdlite_fixed.py")

from src.mdlite import render as render_head


# ---------------------------------------------------------------------------
# regressionTestId: mdlite/bold-underscore  (issue #3)
# Old version: __bold__ not recognised, returned as plain text.
# HEAD: fixed by direct commit 2026-04-22. correctOutcome: cant_reproduce.
# ---------------------------------------------------------------------------

class TestBoldUnderscore:

    def test_old_returns_plain_text(self):
        """Pre-fix: __bold__ passes through unchanged."""
        result = _old3.render("__bold__")
        assert result == "<p>__bold__</p>"

    def test_head_renders_strong(self):
        """HEAD: __bold__ now renders as <strong>bold</strong>."""
        result = render_head("__bold__")
        assert result == "<p><strong>bold</strong></p>"


# ---------------------------------------------------------------------------
# regressionTestId: mdlite/raw-html-passthrough  (issue #5)
# HEAD: raw HTML is passed through unescaped.
# Fix: html.escape() applied before inline regexes.
# ---------------------------------------------------------------------------

class TestRawHtmlPassthrough:

    def test_head_passes_script_tag_through(self):
        """HEAD: script tag is not escaped — passes through as-is."""
        result = render_head("<script>alert(1)</script>")
        assert result == "<p><script>alert(1)</script></p>"

    def test_fixed_escapes_script_tag(self):
        """Fix: script tag is escaped to &lt;script&gt;..."""
        result = _fix5.render("<script>alert(1)</script>")
        assert result == "<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>"

    def test_fixed_normal_markdown_still_works(self):
        """Fix: normal markdown still renders correctly after escape."""
        result = _fix5.render("**bold**")
        assert result == "<p><strong>bold</strong></p>"
