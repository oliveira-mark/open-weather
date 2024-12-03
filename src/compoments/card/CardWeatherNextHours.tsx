import React from 'react';

interface WeatherNextHoursProps {
  data: any;
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

const CardWeatherNextHours: React.FC<WeatherNextHoursProps> = ({ data }) => {

  function getTimeByOffset(offsetInSeconds: number): number {
    const currentDate = new Date();
    const offsetInMilliseconds = offsetInSeconds;
    const localTime = new Date(currentDate.getTime() + offsetInMilliseconds);
    const hours = localTime.getHours();
    return hours;
  }
  
  return (
    <div className="min-h-20 rounded-xl p-5 text-white" style={{ backgroundColor: 'rgb(7 32 61 / 13%)' }}>
      <p className="text-sm font-extralight">Check below the weather in São Paulo for the next few hours, including temperature and forecasts.</p>
      <hr className='my-3 border-t-2 border-white/20' />
      <div className="flex justify-between text-center">
        {data && (
          data.map((hour: WeatherHour, index: number) => (
            <div key={index} className="flex flex-col">
              <h5 className="font-extralight">{getTimeByOffset(-10800) + index + 1}h</h5>
              <img className="-my-3" src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt="" />
              <h6 className="font-extralight">{Math.round(hour.main.temp)}°</h6>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardWeatherNextHours;