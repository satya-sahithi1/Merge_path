GRADE_POINTS_OLD = {
    "O": 10,
    "A": 8,
    "B": 6,
    "C": 5,
    "F": 0,
}


def semester_gpa(courses):
    total_points = 0
    total_credits = 0
    for grade, credits in courses:
        if credits <= 0:
            raise ValueError(f"Credits must be positive, got {credits}")
        total_points += GRADE_POINTS_OLD[grade] * credits
        total_credits += credits
    return round(total_points / total_credits, 2)


def cgpa(semesters):
    gpas = [semester_gpa(sem) for sem in semesters]
    return round(sum(gpas) / len(gpas), 2)
