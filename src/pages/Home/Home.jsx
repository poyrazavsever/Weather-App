import React, { useState } from 'react'
import { Helmet } from "react-helmet";

// components
import CityList from './CityList'
import Map from './Map';

function Home() {

    const [selectList, setSelectList] = useState(1)

    return (
        <div className='max-w-screen-lg mx-auto'>

            <Helmet>
                <title>Türkiye Hava Durumu | Şehir Listesi</title>
            </Helmet>

            <div>
                <h1 className='text-3xl sm:text-5xl md:text-7xl text-white font-bold text-center my-16'>Türkiye Hava Durumu</h1>
            </div>

            <div className='w-full flex justify-center'>
                <button onClick={() => selectList === 1 ? setSelectList(2) : setSelectList(1)}
                    className='text-indigo-200 text-center flex justify-center items-center border border-indigo-200 px-6 py-2 hover:bg-indigo-200 hover:text-indigo-950 transition-all duration-100'>
                    {selectList === 1 ? "Haritaya Geç" : "Şehir Listesine Geç"}
                </button>
            </div>



            <div className={selectList === 2 ? "hidden" : "visible"}>
                <CityList />
            </div>

            <div className={selectList === 1 ? "hidden" : "visible"}>
                <Map />
            </div>

        </div>
    )
}

export default Home