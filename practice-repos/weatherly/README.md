# weatherly

A minimal command-line tool that fetches and displays current weather for a city using a weather API.

## Requirements

- Python 3.10 or higher
- pytest (for running tests)

## Installation

```bash
git clone https://github.com/kiran-weather-dev/weatherly.git
cd weatherly
pip install -r requirements.txt
```

## Usage

```python
from src.weather import parse_weather, format_output

# Simulated API response
data = {
    "main": {"temp": 28.4, "humidity": 72},
    "weather": [{"description": "partly cloudy"}]
}

parsed = parse_weather(data)
print(format_output(parsed))
# Temp: 28.4°C | Humidity: 72% | Partly cloudy
```

## Running tests

```bash
pytest tests/
```

## License

MIT
