import React from 'react';

interface WeatherNextHoursProps {
  data: any;
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

const CardWeatherNextHours: React.FC<WeatherNextHoursProps> = ({ data }) => {

  function getDayOfWeekFromToday(daysToAdd: number): string {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
  
    const targetDay = (currentDay + (daysToAdd + 1)) % 7;
    return daysOfWeek[targetDay];
  }



  return (
    <div className="min-h-20 rounded-xl p-5 pb-3 text-white mt-5" style={{ backgroundColor: 'rgb(7 32 61 / 13%)' }}>
      <p className="text-sm font-extralight font-medium">7-Days Forecast</p>
      <hr className='my-3 border-t-2 border-white/20' />
      <div className="flex flex-row justify-between flex-wrap">
        {data && (
          data.map((day: WeatherDay, index: number) => {
            return (
              <div key={index} className="w-full flex flex-row items-center -my-2">
                <h5 className="w-1/3 font-extralight">{getDayOfWeekFromToday(index)}</h5>
                <img className="w-1/6" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" />
                <h6 className="w-1/4 text-center font-extralight">Min: {Math.round(day.temp.min)}°</h6>
                <h6 className="w-1/4 text-center font-extralight">Max: {Math.round(day.temp.max)}°</h6>
              </div>
            );
          })
        )}
        

      </div>
    </div>
  );
};

export default CardWeatherNextHours;