import React from 'react'

// Icons
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { BsWind, BsFillCalendarEventFill, BsFillCloudHaze2Fill } from "react-icons/bs"
import { FaTemperatureLow } from "react-icons/fa"

// State 
import { useSelector } from 'react-redux'

function WeatherDisplay() {

    const weatherData = useSelector((state) => state.counter.weatherData)

    const textStyle = 'text-xl text-zinc-200 flex items-center gap-5'


    if (!weatherData) {
        return (
            <div className='w-screen h-screen flex justify-center items-center'>
                <AiOutlineLoading3Quarters className='text-5xl text-indigo-500 animate-spin' />
            </div>
        )
    }

    return (

        <div className='w-80 sm:w-[400px] h-[500px] bg-gray-800 shadow-lg rounded-lg'>

            <div className='pl-4'>
                <div>
                    <h2 className='text-7xl font-medium text-zinc-300 py-4'>{weatherData.name}</h2>
                </div>

                <div className='flex flex-col items-start gap-5'>

                    <div className='flex flex-col items-start gap-2'>

                        <h4 className='text-2xl font-medium text-gray-500'>- Weather</h4>

                        <div className={textStyle}>
                            <BsFillCloudHaze2Fill />
                            {weatherData.weather?.map((data) => data.description).join(", ")}
                        </div>

                    </div>

                    <div className='flex flex-col items-start gap-2'>

                        <h4 className='text-2xl font-medium text-gray-500'>- Temperature</h4>

                        <div className={textStyle}>
                            <FaTemperatureLow />
                            {Math.ceil(weatherData.main?.temp - 273)} °C
                        </div>

                    </div>

                    <div className='flex flex-col items-start gap-2'>

                        <h4 className='text-2xl font-medium text-gray-500'>- Date</h4>

                        <div className={textStyle}>
                            <BsFillCalendarEventFill />
                            {new Date(weatherData.dt * 1000).toLocaleDateString()}
                        </div>

                    </div>

                    <div className='flex flex-col items-start gap-2'>

                        <h4 className='text-2xl font-medium text-gray-500'>- Wind</h4>

                        <div className={textStyle}>
                            <BsWind /> {weatherData.wind?.speed}
                        </div>

                    </div>
                </div>




            </div>


        </div>
    )
}

export default WeatherDisplay