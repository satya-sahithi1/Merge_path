# weather_fixed.py — v1.1.0
# Fixes:
#   1. Returns a clean error dict when 'main' key is missing (issue #2)
#   2. Returns a clean error dict when 'weather' list is empty (issue #7)

def parse_weather(data: dict) -> dict:
    """Parse weather data from an API response dict.

    Returns a dict with temp, humidity, and description on success,
    or a dict with 'error' key if the response is malformed.
    """
    if "main" not in data:
        return {"error": "Unexpected API response: missing weather data."}
    if not data.get("weather"):
        return {"error": "Unexpected API response: weather list is empty."}
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
