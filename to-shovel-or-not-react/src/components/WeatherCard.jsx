import React from "react";
import { BsCloudSnow, BsSnow3, BsDroplet } from 'react-icons/bs'

export default function WeatherCard(props) {
  const {date, high, low, snow, rain, timeframes} = props;
  return (
    <div className="flex flex-col mt-6 w-1/6 h-5/6 p-5 text-white bg-sky-400 font-bold drop-shadow-md rounded-lg">
      <div className="flex flex-row place-content-between items-end py-3">
        <BsCloudSnow className="h-full w-1/3 py-3"/>
        <p className="text-3xl">Monday</p>
      </div>
      <div className="bg-pink-500 w-full h-2/5 text-center">
        CHART AREA
      </div>
      <div className="flex flex-row h-1/6 place-content-around pt-3 text-center text-2xl">
        <span>
          <p>HIGH</p>
          <p className="text-4xl">8{'\u00b0'}</p>
        </span>
        <span>
          <p>LOW</p>
          <p className="text-4xl">-8{'\u00b0'}</p>
        </span>
      </div>
      <div className="flex flex-row h-1/6 place-content-around pt-3 text-center">
        <span className="flex flex-col items-center">
          <BsDroplet className="h-10 w-10"/>
          <p className="text-xl">8mm</p>
        </span>
        <span className="flex flex-col items-center">
          <BsSnow3 className="h-10 w-10"/>
          <p className="text-xl">60mm</p>
        </span>
      </div>
    </div>
  )
}