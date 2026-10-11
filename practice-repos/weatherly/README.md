# weatherly

A small Python module and CLI for parsing and displaying weather data from an API response.

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

## CLI

```bash
python src/cli.py London
```

## Running tests

```bash
pytest tests/
```

## License

See [LICENSE](LICENSE).
