import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom"

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {setWeatherData} from "../../store/counterSlice"
// Data
import cityData from '../../cityData';
import WeatherDisplay from './components/WeatherDisplay';

function WeatherPage() {

  const { id } = useParams();
  const weatherData = useSelector((state) => state.counter.weatherData)
  const dispatch = useDispatch();
  let lat, lon;

  const getWeatherData = async (lat, lon) => {
    try{
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ee842d38462534a74ced2a9a88bf2a37`)
      dispatch(setWeatherData(data))
    } 
    catch {
      console.log("Veri alınırken bir hata oluştu.")
    }
    
  }

  useEffect(() => {
    cityData.map((cityInfo) => {
      if (cityInfo.id == id) {
        lat = cityInfo.latitude
        lon = cityInfo.longitude
      }
    })

    getWeatherData(lat, lon);

  }, [lat, lon])

  console.log(weatherData)

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <WeatherDisplay />
    </div>
  )
}

export default WeatherPage