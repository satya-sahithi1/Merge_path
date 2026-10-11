"""Tests for weatherly — HEAD version (v1.0.0)."""

import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

import pytest
from src.weather import parse_weather, format_output, get_weather

VALID_RESPONSE = {
    "main": {"temp": 22.5, "humidity": 60},
    "weather": [{"description": "clear sky"}],
}


def test_parse_weather_returns_expected_fields():
    result = parse_weather(VALID_RESPONSE)
    assert result["temp"] == 22.5
    assert result["humidity"] == 60
    assert result["description"] == "clear sky"


def test_format_output_contains_temp():
    result = format_output({"temp": 22.5, "humidity": 60, "description": "clear sky"})
    assert "22.5" in result


def test_format_output_capitalises_description():
    result = format_output({"temp": 10.0, "humidity": 50, "description": "light rain"})
    assert "Light rain" in result


def test_get_weather_returns_string():
    result = get_weather(VALID_RESPONSE)
    assert isinstance(result, str)
    assert "22.5" in result
