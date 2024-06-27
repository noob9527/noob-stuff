import requests
import json
from pydantic import BaseModel, Field
from langchain_core.tools import StructuredTool
from langchain.agents import tool
import datetime


# Define the input schema
class OpenMeteoInput(BaseModel):
    latitude: float = Field(...,
                            description="Latitude of the location to fetch weather data for")
    longitude: float = Field(...,
                             description="Longitude of the location to fetch weather data for")


@tool()
def get_current_temperature(
        # latitude: float, longitude: float,
        json_str: str,
) -> dict:
    """Fetch current temperature for given coordinates. parameter should be json contains two keys, namely, latitude, longitude"""

    try:
        data = json.loads(json_str)
        latitude = data['latitude']
        longitude = data['latitude']
    except ValueError as e:
        print("failed extract coordinates from parameter")
        raise e

    BASE_URL = "https://api.open-meteo.com/v1/forecast"

    # Parameters for the request
    params = {
        'latitude': latitude,
        'longitude': longitude,
        'hourly': 'temperature_2m',
        'forecast_days': 1,
    }

    # Make the request
    response = requests.get(BASE_URL, params=params)

    if response.status_code == 200:
        results = response.json()
    else:
        raise Exception(
            f"API Request failed with status code: {response.status_code}")

    current_utc_time = datetime.datetime.utcnow()
    time_list = [datetime.datetime.fromisoformat(time_str.replace('Z', '+00:00')) for
                 time_str in results['hourly']['time']]
    temperature_list = results['hourly']['temperature_2m']

    closest_time_index = min(range(len(time_list)),
                             key=lambda i: abs(time_list[i] - current_utc_time))
    current_temperature = temperature_list[closest_time_index]

    return f'The current temperature is {current_temperature}°C'


# get_current_temperature = StructuredTool.from_function(
#     func=__get_current_temperature,
#     # args_schema=OpenMeteoInput,
# )
