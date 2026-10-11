"""
Scenario regression tests for weatherly.

Hidden from the learner. These verify the buggy/fixed behavior
described in issues.json so verifiedByTest can be set to true.

Each class maps to a regressionTestId in issues.json.
"""

import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../.."))

import pytest
from src.weather import parse_weather
from scenarios.fixes.weather_fixed import parse_weather as parse_weather_fixed

VALID_RESPONSE = {
    "main": {"temp": 22.5, "humidity": 60},
    "weather": [{"description": "clear sky"}],
}

# 404-style response — city not found / mistyped city name
NOT_FOUND_RESPONSE = {
    "cod": "404",
    "message": "city not found",
}

# Empty weather list — triggers IndexError on data["weather"][0]
EMPTY_WEATHER_RESPONSE = {
    "main": {"temp": 18.0, "humidity": 55},
    "weather": [],
}


# ---------------------------------------------------------------------------
# regressionTestId: weatherly/missing-main-key  (issue #2)
# ---------------------------------------------------------------------------

class TestMissingMainKey:

    def test_buggy_raises_keyerror(self):
        """v1.0.0: KeyError raised when 'main' key is absent."""
        with pytest.raises(KeyError):
            parse_weather(NOT_FOUND_RESPONSE)

    def test_fixed_returns_error_dict(self):
        """v1.1.0: returns clean error dict instead of raising."""
        result = parse_weather_fixed(NOT_FOUND_RESPONSE)
        assert "error" in result
        assert "main" not in result

    def test_fixed_valid_response_still_works(self):
        """v1.1.0: valid response still parses correctly after the fix."""
        result = parse_weather_fixed(VALID_RESPONSE)
        assert result["temp"] == 22.5


# ---------------------------------------------------------------------------
# regressionTestId: weatherly/empty-weather-list  (issue #7)
# ---------------------------------------------------------------------------

class TestEmptyWeatherList:

    def test_buggy_raises_indexerror(self):
        """v1.0.0: IndexError raised when weather list is empty."""
        with pytest.raises(IndexError):
            parse_weather(EMPTY_WEATHER_RESPONSE)

    def test_fixed_returns_error_dict(self):
        """v1.1.0: returns clean error dict instead of raising."""
        result = parse_weather_fixed(EMPTY_WEATHER_RESPONSE)
        assert "error" in result
