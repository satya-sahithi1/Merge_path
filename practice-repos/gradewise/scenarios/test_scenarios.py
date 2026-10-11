"""
Scenario regression tests for gradewise.

Hidden from the learner. These verify the buggy/fixed behavior
described in issues.json so verifiedByTest can be set to true.

Each class maps to a regressionTestId in issues.json.
"""

import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

import pytest
from src.calculator import semester_gpa, cgpa
from scenarios.fixes.issue_6.calculator_fixed import (
    cgpa as cgpa_fixed_6,
    semester_gpa as semester_gpa_fixed_6,
)
from scenarios.fixes.issue_10.calculator_fixed import (
    semester_gpa as semester_gpa_fixed_10,
)
from scenarios.history.issue_3.calculator_old import (
    semester_gpa as semester_gpa_old_3,
)


# ---------------------------------------------------------------------------
# regressionTestId: gradewise/keyerror-grade  (issue #3)
# Old version lacks A+ and B+ — raises KeyError on those grades.
# HEAD works fine (PR #5 fixed it). correctOutcome: cant_reproduce.
# ---------------------------------------------------------------------------

class TestKeyErrorGrade:

    def test_old_raises_keyerror_on_aplus(self):
        """Pre-PR #5: KeyError when grade is 'A+'."""
        with pytest.raises(KeyError):
            semester_gpa_old_3([("A+", 3)])

    def test_old_raises_keyerror_on_bplus(self):
        """Pre-PR #5: KeyError when grade is 'B+'."""
        with pytest.raises(KeyError):
            semester_gpa_old_3([("B+", 3)])

    def test_head_aplus_works(self):
        """HEAD: 'A+' now resolves to 9 points — bug is fixed."""
        result = semester_gpa([("A+", 3)])
        assert result == 9.0

    def test_head_bplus_works(self):
        """HEAD: 'B+' now resolves to 7 points — bug is fixed."""
        result = semester_gpa([("B+", 3)])
        assert result == 7.0


# ---------------------------------------------------------------------------
# regressionTestId: gradewise/cgpa-ignores-credits  (issue #6)
# HEAD cgpa() averages semester GPAs without weighting by credits.
# Fix: credit-weighted average across all courses in all semesters.
# Spec example: sem1 = [("O",2)], sem2 = [("B",6)] → expected 7.0
# ---------------------------------------------------------------------------

class TestCgpaIgnoresCredits:

    def test_buggy_cgpa_returns_wrong_value(self):
        """HEAD: cgpa ignores credits — returns 8.0 instead of 7.0."""
        sem1 = [("O", 2)]   # GPA = 10.0, 2 credits
        sem2 = [("B", 6)]   # GPA = 6.0,  6 credits
        result = cgpa([sem1, sem2])
        # Bug: unweighted average → (10 + 6) / 2 = 8.0
        assert result == 8.0

    def test_fixed_cgpa_returns_correct_value(self):
        """Fix: credit-weighted cgpa returns 7.0."""
        sem1 = [("O", 2)]   # 10 pts × 2 cr = 20
        sem2 = [("B", 6)]   # 6 pts × 6 cr = 36
        # weighted: (20 + 36) / (2 + 6) = 56 / 8 = 7.0
        result = cgpa_fixed_6([sem1, sem2])
        assert result == 7.0

    def test_fixed_cgpa_equal_credits_unchanged(self):
        """Fix: when all semesters have equal credits, result is same as before."""
        sem1 = [("A", 4)]
        sem2 = [("A", 4)]
        assert cgpa_fixed_6([sem1, sem2]) == 8.0


# ---------------------------------------------------------------------------
# regressionTestId: gradewise/empty-semester-crash  (issue #10)
# HEAD semester_gpa([]) raises ZeroDivisionError.
# Fix: if not courses: return 0.0
# ---------------------------------------------------------------------------

class TestEmptySemesterCrash:

    def test_buggy_empty_list_raises_zerodivision(self):
        """HEAD: semester_gpa([]) raises ZeroDivisionError."""
        with pytest.raises(ZeroDivisionError):
            semester_gpa([])

    def test_fixed_empty_list_returns_zero(self):
        """Fix: semester_gpa([]) returns 0.0."""
        result = semester_gpa_fixed_10([])
        assert result == 0.0

    def test_fixed_non_empty_still_works(self):
        """Fix: normal input still computes correctly after the guard."""
        result = semester_gpa_fixed_10([("A", 4)])
        assert result == 8.0
