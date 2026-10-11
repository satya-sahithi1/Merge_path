# cli.py — command-line entry point for weatherly
# Usage: python cli.py <city>
# In production this calls a weather API. Here it runs against a simulated response.

import sys
from src.weather import get_weather

# Simulated response — replace with a real requests.get() call in production
DEMO_RESPONSE = {
    "main": {"temp": 22.5, "humidity": 60},
    "weather": [{"description": "clear sky"}],
}

def main():
    if len(sys.argv) < 2:
        print("Usage: python cli.py <city>")
        sys.exit(1)
    city = sys.argv[1]
    print(f"Weather for {city}:")
    print(get_weather(DEMO_RESPONSE))

if __name__ == "__main__":
    main()
