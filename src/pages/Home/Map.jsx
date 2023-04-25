import React from 'react'
import TurkeyMap from 'turkey-map-react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlateNumber } from "../../store/counterSlice"
import { NavLink } from 'react-router-dom'

import {CgDanger} from "react-icons/cg"



function Map() {

  const dispatch = useDispatch()
  const plateNumber = useSelector((state) => state.counter.plateNumber)

  return (

    <div>

      {/* Alert Message  */}

      <div class="flex items-start p-4 my-12 text-sm text-red-400 rounded-lg bg-gray-800" role="alert">
        <CgDanger className='text-xl mr-2'/>
        <div>
          <span class="font-medium">Haritada düzeltilecek hatalar;</span>
          <ul class="mt-1.5 ml-4 list-disc list-inside">
            <li>İlk bastığınız şehirde null değer döndürüyor.</li>
            <li>İkinci basılan şehirin açılmasına karşın sonrasında tıklanıldığında tekrar ikinci açılıyor. Ve bu döngü halinde devam ediyor.</li>
          </ul>
        </div>
      </div>

      {/* Map  */}

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

    </div>

  )
}

export default Map