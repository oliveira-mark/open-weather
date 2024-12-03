import React, { useState, useEffect } from "react";
import { getWeatherCurrent, getWeatherNextHours, getWeatherNextDays } from "../../api/openweather";
import CardWeatherCurrent from './CardWeatherCurrent';
import CardWeatherNextHours from './CardWeatherNextHours';
import CardWeatherNextDays from './CardWeatherNextDays';
import CardWeatherBackground from './CardWeatherBackground';

const CardWeather: React.FC = () => {
  const latitude = -23.179;
  const longitude = -45.887;
  const [weatherCode, setWeatherCode] = useState<number>(800);
  const [weatherCurrent, setWeatherCurrent] = useState<any>(null);
  const [weatherNextHours, setWeatherNextHours] = useState<any>(null);
  const [weatherNextDays, setWeatherNextDays] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const weather = await getWeatherCurrent(latitude, longitude);
        const weatherHours = await getWeatherNextHours(latitude, longitude);
        const weatherDays = await getWeatherNextDays(latitude, longitude);

        setWeatherCurrent(weather);
        setWeatherNextHours(weatherHours);
        setWeatherNextDays(weatherDays);
        
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin border-t-4 border-white w-16 h-16 rounded-full">
        </div>
      </div>
    );
  }

  return (
    <CardWeatherBackground data={weatherCurrent}>
      <CardWeatherCurrent data={weatherCurrent} />
      <CardWeatherNextHours data={weatherNextHours} />
      <CardWeatherNextDays data={weatherNextDays} />
    </CardWeatherBackground>
  );
};

export default CardWeather;