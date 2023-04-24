import React from 'react'
import TurkeyMap from 'turkey-map-react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlateNumber } from "../../store/counterSlice"



function Map() {

  const dispatch = useDispatch()
  const plateNumber = useSelector((state) => state.counter.plateNumber)

  return (
    <div>
      <TurkeyMap
        hoverable={true}
        customStyle={{ idleColor: "#4f46e5", hoverColor: "#a5b4fc" }}
        showTooltip={true}
        onClick={(city) => {
          dispatch(setPlateNumber(city.plateNumber))
          console.log(plateNumber)
        }}
      />
    </div>
  )
}

export default Map