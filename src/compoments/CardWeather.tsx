import React from 'react';

const CardWeather: React.FC = () => {
  return (
    <div 
      className="min-h-96 rounded-2xl p-4 my-10 w-full max-w-md backdrop-blur-md"
      style={{ backgroundImage: 'linear-gradient(0deg, rgb(255 181 40 / 64%) 30%, rgb(4 22 43 / 13%))' }}
      >
        <header className="text-center py-8 text-white">
          <h1 className="text-2xl font-extralight leading-normal">
            São Paulo
            <span className="block text-8xl relative -right-1 tracking-[-0.05rem] font-thin">
              14<sup className="top-[-0.7em] text-5xl">°</sup>
            </span>
          </h1>
          <h2 className="opacity-80 font-extralight mt-4">Scattered clouds</h2>
          <p className="opacity-80 text-sm mt-1">
            Friday, August 20, 2022
          </p>
        </header>

        <div className="min-h-20 rounded-xl p-5 text-white" style={{ backgroundColor: 'rgb(7 32 61 / 13%)' }}>
          <p className="text-sm font-extralight">Warning: Lorem ipsum, dolor sit amet consectetur adipi elit. Nulla et quidem excepi rem illo nesciunt!</p>
          <hr className='my-3 border-t-2 border-white/20' />
          <div className="flex justify-between text-center">
            <div className="flex flex-col">
              <h5>18h</h5>
              <img className="-my-3" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6>25ª</h6>
            </div>
            <div className="flex flex-col">
              <h5>19h</h5>
              <img className="-my-3" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6>25ª</h6>
            </div>
            <div className="flex flex-col">
              <h5>20h</h5>
              <img className="-my-3" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6>25ª</h6>
            </div>
            <div className="flex flex-col">
              <h5>21h</h5>
              <img className="-my-3" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6>25ª</h6>
            </div>
            <div className="flex flex-col">
              <h5>22h</h5>
              <img className="-my-3" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6>25ª</h6>
            </div>
            <div className="flex flex-col">
              <h5>23h</h5>
              <img className="-my-3" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6>25ª</h6>
            </div>
          </div>
        </div>

        <div className="min-h-20 rounded-xl p-5 pb-3 text-white mt-5" style={{ backgroundColor: 'rgb(7 32 61 / 13%)' }}>
          <p className="text-sm font-extralight font-medium">7-Days Forecast</p>
          <hr className='my-3 border-t-2 border-white/20' />
          <div className="flex flex-row justify-between flex-wrap">
            <div className="w-full flex flex-row items-center -my-2">
              <h5 className="w-1/3 font-extralight">Tuesday</h5>
              <img className="w-1/6" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
              <span className="w-1/3 h-1.5 bg-sky-700 rounded-2xl"></span>
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
            </div>
            <div className="w-full flex flex-row items-center -my-2">
              <h5 className="w-1/3 font-extralight">Wednesday</h5>
              <img className="w-1/6" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
              <span className="w-1/3 h-1.5 bg-sky-700 rounded-2xl"></span>
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
            </div>
            <div className="w-full flex flex-row items-center -my-2">
              <h5 className="w-1/3 font-extralight">Thursday</h5>
              <img className="w-1/6" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
              <span className="w-1/3 h-1.5 bg-sky-700 rounded-2xl"></span>
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
            </div>
            <div className="w-full flex flex-row items-center -my-2">
              <h5 className="w-1/3 font-extralight">Friday</h5>
              <img className="w-1/6" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
              <span className="w-1/3 h-1.5 bg-sky-700 rounded-2xl"></span>
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
            </div>
            <div className="w-full flex flex-row items-center -my-2">
              <h5 className="w-1/3 font-extralight">Saturday</h5>
              <img className="w-1/6" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
              <span className="w-1/3 h-1.5 bg-sky-700 rounded-2xl"></span>
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
            </div>
            <div className="w-full flex flex-row items-center -my-2">
              <h5 className="w-1/3 font-extralight">Sunday</h5>
              <img className="w-1/6" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
              <span className="w-1/3 h-1.5 bg-sky-700 rounded-2xl"></span>
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
            </div>
            <div className="w-full flex flex-row items-center -my-2">
              <h5 className="w-1/3 font-extralight">Monday</h5>
              <img className="w-1/6" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
              <span className="w-1/3 h-1.5 bg-sky-700 rounded-2xl"></span>
              <h6 className="w-1/6 text-center font-extralight">25ª</h6>
            </div>
          </div>
        </div>

      

    </div>
  );
};

export default CardWeather;