"""Tests for mdlite — HEAD version."""

import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from src.mdlite import render


def test_h1_heading():
    assert render("# Hello") == "<h1>Hello</h1>"


def test_h2_heading():
    assert render("## Sub") == "<h2>Sub</h2>"


def test_paragraph():
    assert render("plain text") == "<p>plain text</p>"


def test_bold_asterisk():
    assert render("**bold**") == "<p><strong>bold</strong></p>"


def test_bold_underscore():
    assert render("__bold__") == "<p><strong>bold</strong></p>"


def test_emphasis():
    assert render("*em*") == "<p><em>em</em></p>"


def test_inline_code():
    assert render("`code`") == "<p><code>code</code></p>"


def test_link():
    assert render("[click](http://example.com)") == '<p><a href="http://example.com">click</a></p>'


def test_flat_list():
    md = "- one\n- two\n- three"
    assert render(md) == "<ul><li>one</li><li>two</li><li>three</li></ul>"


def test_empty_input():
    assert render("") == ""


def test_blank_lines_ignored():
    assert render("# Title\n\nparagraph") == "<h1>Title</h1>\n<p>paragraph</p>"


def test_heading_strips_inline():
    assert render("# **bold** title") == "<h1><strong>bold</strong> title</h1>"
