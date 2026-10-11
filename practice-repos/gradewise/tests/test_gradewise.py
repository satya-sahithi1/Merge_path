"""Tests for gradewise — HEAD version."""

import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

import pytest
from src.grades import GRADE_POINTS
from src.calculator import semester_gpa, cgpa


def test_grade_points_contains_expected_grades():
    assert GRADE_POINTS["O"] == 10
    assert GRADE_POINTS["A+"] == 9
    assert GRADE_POINTS["A"] == 8
    assert GRADE_POINTS["B+"] == 7
    assert GRADE_POINTS["B"] == 6
    assert GRADE_POINTS["C"] == 5
    assert GRADE_POINTS["F"] == 0


def test_semester_gpa_single_course():
    result = semester_gpa([("A", 4)])
    assert result == 8.0


def test_semester_gpa_multiple_courses():
    result = semester_gpa([("O", 4), ("B", 3)])
    expected = round((10 * 4 + 6 * 3) / 7, 2)
    assert result == expected


def test_semester_gpa_rejects_zero_credits():
    with pytest.raises(ValueError):
        semester_gpa([("A", 0)])


def test_semester_gpa_rejects_negative_credits():
    with pytest.raises(ValueError):
        semester_gpa([("A", -1)])


def test_cgpa_two_equal_semesters():
    sem1 = [("A", 4), ("B", 3)]
    sem2 = [("A", 4), ("B", 3)]
    g1 = semester_gpa(sem1)
    g2 = semester_gpa(sem2)
    result = cgpa([sem1, sem2])
    assert result == round((g1 + g2) / 2, 2)


def test_semester_gpa_all_grades():
    for grade in GRADE_POINTS:
        result = semester_gpa([(grade, 3)])
        assert result == float(GRADE_POINTS[grade])
