import React from 'react'
import TurkeyMap from 'turkey-map-react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlateNumber } from "../../store/counterSlice"
import { NavLink } from 'react-router-dom'



function Map() {

  const dispatch = useDispatch()
  const plateNumber = useSelector((state) => state.counter.plateNumber)

  return (
    <NavLink to={`/cities/${plateNumber}`}>
      <TurkeyMap
        hoverable={true}
        customStyle={{ idleColor: "#4f46e5", hoverColor: "#a5b4fc" }}
        showTooltip={true}
        onClick={(city) => {
          dispatch(setPlateNumber(city.plateNumber))
        }}
      />
    </NavLink>
  )
}

export default Map