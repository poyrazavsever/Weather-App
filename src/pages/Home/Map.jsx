import React, { useState } from 'react'
import TurkeyMap, { Tooltip, cityComponent, cityData } from 'turkey-map-react'



function Map() {

  const [selectCities, setSelectCities] = useState([])

  const handleMapClick = (city) => {
    setSelectCities([{
      name: city.name,
      id: city.id,
    }])
    console.log(selectCities)
  }


  return (
    <div>
      <TurkeyMap
        hoverable={true}
        customStyle={{ idleColor: "#4f46e5", hoverColor: "#a5b4fc"}}
        showTooltip={true}
        onClick={(city) => handleMapClick(city)}
      />
    </div>
  )
}

export default Map