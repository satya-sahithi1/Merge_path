# gradewise

A CGPA and semester GPA calculator for the 10-point grading scale.

## Requirements

- Python 3.10 or higher
- pytest (for running tests)

## Installation

```bash
git clone https://github.com/amaan-dev/gradewise.git
cd gradewise
pip install -r requirements.txt
```

## Usage

```python
from src.grades import GRADE_POINTS
from src.calculator import semester_gpa, cgpa

# Grades: O=10, A+=9, A=8, B+=7, B=6, C=5, F=0

# Semester GPA — list of (grade, credits) tuples
gpa = semester_gpa([("O", 4), ("A+", 3), ("B", 3)])
print(gpa)  # 8.6

# CGPA — list of semesters
result = cgpa([
    [("O", 4), ("A", 3)],
    [("A+", 3), ("B+", 4)],
])
print(result)
```

## Running tests

```bash
pytest tests/
```

All tests must pass before you open a pull request.

## Project structure

```
gradewise/
├── src/
│   ├── grades.py       # grade-point mapping
│   └── calculator.py   # semester_gpa and cgpa
├── tests/
│   └── test_gradewise.py
├── requirements.txt
├── README.md
└── CONTRIBUTING.md
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

MIT
