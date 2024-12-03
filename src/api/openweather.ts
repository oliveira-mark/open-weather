import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_API_URL = process.env.REACT_APP_OPENWEATHER_API_URL;

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface WeatherHour {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  dt_txt: string;
}

interface WeatherHourResponse {
  list: WeatherHour[];
}

interface WeatherDay {
  dt: number;
  temp: {
    day: number;
    max: number;
    min: number;
    night: number;
    eve: number;
    morn: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  humidity: number;
  wind_speed: number;
  pressure: number;
  sunrise: number;
  sunset: number;
}

interface WeatherDayResponse {
  daily: WeatherDay[];
  timezone_offset: number;
}

export const getWeatherCurrent = async (lat: number, lon: number): Promise<WeatherResponse | null> => {
  try {
    const { data } = await axios.get<WeatherResponse>(`${BASE_API_URL}2.5/weather`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: "metric",
        lang: "en",
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWeatherNextHours = async (lat: number, lon: number): Promise<WeatherHour[] | null> => {
  try {
    const response = await axios.get<WeatherHourResponse>(`${BASE_API_URL}2.5/forecast`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: "metric",
        lang: "en",
      },
    });
    return response.data.list.slice(1, 7);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWeatherNextDays = async (lat: number, lon: number): Promise<WeatherDay[] | null> => {
  try {
    const response = await axios.get<WeatherDayResponse>(`${BASE_API_URL}3.0/onecall`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: "metric",
        lang: "en",
        exclude: "current,minutely,hourly,alerts",
      },
    });
    console.log(response.data);
    return response.data.daily.slice(1, 8);
  } catch (error) {
    console.error(error);
    return null;
  }
};
