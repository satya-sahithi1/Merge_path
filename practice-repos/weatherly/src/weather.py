# weather.py — v1.0.0
# Parses and displays weather data from an API response dict.

def parse_weather(data: dict) -> dict:
    """Parse weather data from an API response dict.

    Returns a dict with temp, humidity, and description.
    """
    temp = data["main"]["temp"]
    humidity = data["main"]["humidity"]
    description = data["weather"][0]["description"]
    return {"temp": temp, "humidity": humidity, "description": description}


def format_output(parsed: dict) -> str:
    """Format parsed weather data as a human-readable string."""
    return (
        f"Temp: {parsed['temp']}°C | "
        f"Humidity: {parsed['humidity']}% | "
        f"{parsed['description'].capitalize()}"
    )


def get_weather(data: dict) -> str:
    """Takes a raw API response dict, returns a formatted weather string."""
    parsed = parse_weather(data)
    return format_output(parsed)
