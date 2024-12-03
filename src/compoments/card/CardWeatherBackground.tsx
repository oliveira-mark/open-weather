import React from 'react';

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

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface CardWeatherBackgroundProps {
  children: React.ReactNode;
  data: WeatherData | null;
}

type WeatherGradient = {
  code: number;
  description: string;
  gradient: string;
};

const weatherGradients: WeatherGradient[] = [
  { code: 800, description: "Clear sky", gradient: "rgb(130 219 255 / 40%)" },
  { code: 801, description: "Few clouds", gradient: "rgb(130 219 255 / 40%)" },
  { code: 802, description: "Scattered clouds", gradient: "rgb(130 219 255 / 40%)" },
  { code: 803, description: "Broken clouds", gradient: "rgb(130 219 255 / 40%)" },
  { code: 804, description: "Overcast clouds", gradient: "rgb(4 22 43 / 65%)" },
  { code: 300, description: "Light rain", gradient: "rgb(4 22 43 / 65%)" },
  { code: 302, description: "Moderate rain", gradient: "rgb(4 22 43 / 65%)" },
  { code: 303, description: "Heavy rain", gradient: "rgb(4 22 43 / 65%)" },
  { code: 321, description: "Very heavy rain", gradient: "rgb(4 22 43 / 65%)" },
  { code: 306, description: "Rain and snow", gradient: "rgb(4 22 43 / 65%)" },
  { code: 400, description: "Light snow", gradient: "rgb(4 22 43 / 65%)" },
  { code: 402, description: "Moderate snow", gradient: "rgb(4 22 43 / 65%)" },
  { code: 403, description: "Heavy snow", gradient: "rgb(4 22 43 / 65%)" },
  { code: 504, description: "Snowstorm", gradient: "rgb(4 22 43 / 65%)" },
  { code: 407, description: "Hail", gradient: "rgb(4 22 43 / 65%)" },
  { code: 200, description: "Thunderstorm with light rain", gradient: "rgb(4 22 43 / 65%)" },
  { code: 201, description: "Thunderstorm with rain", gradient: "rgb(4 22 43 / 65%)" },
  { code: 202, description: "Thunderstorm with heavy rain", gradient: "rgb(4 22 43 / 65%)" },
  { code: 210, description: "Thunderstorm with light hail", gradient: "rgb(4 22 43 / 65%)" },
  { code: 211, description: "Thunderstorm with hail", gradient: "rgb(4 22 43 / 65%)" },
  { code: 212, description: "Thunderstorm with very heavy hail", gradient: "rgb(4 22 43 / 65%)" },
  { code: 221, description: "Thunderstorm with snow", gradient: "rgb(4 22 43 / 65%)" },
  { code: 230, description: "Thunderstorm with snowstorm", gradient: "rgb(4 22 43 / 65%)" },
  { code: 741, description: "Fog", gradient: "rgb(150 150 150 / 65%)" },
  { code: 771, description: "Strong wind", gradient: "rgb(4 22 43 / 65%)" },
  { code: 781, description: "Tornado", gradient: "rgb(4 22 43 / 65%)" }
];

const CardWeatherBackground: React.FC<CardWeatherBackgroundProps> = ({ children, data }) => {

  const weatherGradientCode = weatherGradients.find(grad => grad.code === data?.weather[0].id);
  const gradient = weatherGradientCode ? weatherGradientCode.gradient : "rgb(130 219 255 / 65%)";

  return (
    <div 
      className="min-h-96 rounded-2xl p-4 my-10 max-w-96 max-w-md backdrop-blur-md"
      style={{ backgroundImage: `linear-gradient(0deg, ${gradient} 30%, rgb(4 22 43 / 13%))` }}
    >
      {children}
    </div>
  );
};

export default CardWeatherBackground;
