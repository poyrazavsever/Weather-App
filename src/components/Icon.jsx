import React from 'react'
import classNames from 'classnames'
import { WeatherIcon } from 'weather-react-icons'

// Bu kısmı Prototurk kanalından aldım fakat mantık basit. Bu Weather Icon paketi openweather ile uyumlu icon üretiyor. Burada ise ürettiği iconların id'sine göre renklerini değiştiriyoruz.

function Icon({id}) { 
  return (
    <WeatherIcon name='own' iconId={id} className={classNames({
      "text-5xl my-4" : true,
      "text-yellow-300" : id === 800,
      "text-blue-300" : id === 500,
      "text-red-300" : id === 801,
      "text-red-400" : id === 802,
      "text-blue-400" : id === 803,
      "text-indigo-400" : id === 804,
      
    })} />
  )
}

export default Icon