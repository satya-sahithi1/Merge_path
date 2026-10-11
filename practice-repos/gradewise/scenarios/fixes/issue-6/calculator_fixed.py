from src.grades import GRADE_POINTS


def semester_gpa(courses):
    total_points = 0
    total_credits = 0
    for grade, credits in courses:
        if credits <= 0:
            raise ValueError(f"Credits must be positive, got {credits}")
        total_points += GRADE_POINTS[grade] * credits
        total_credits += credits
    return round(total_points / total_credits, 2)


def cgpa(semesters):
    total_points = 0
    total_credits = 0
    for sem in semesters:
        for grade, credits in sem:
            if credits <= 0:
                raise ValueError(f"Credits must be positive, got {credits}")
            total_points += GRADE_POINTS[grade] * credits
            total_credits += credits
    return round(total_points / total_credits, 2)
