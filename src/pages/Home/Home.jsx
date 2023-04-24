import React from 'react'
import { Helmet } from "react-helmet";

// components
import CityList from './CityList'
import Map from './Map';

function Home() {

    
    return (
        <div className='max-w-screen-lg mx-auto'>

            <Helmet>
                <title>Türkiye Hava Durumu | Şehir Listesi</title>
            </Helmet>

            <div>
                <h1 className='text-3xl sm:text-5xl md:text-7xl text-white font-bold text-center my-16'>Türkiye Hava Durumu</h1>
            </div>

            <div className='hidden'>
                <CityList />
            </div>

            <div>
                <Map />
            </div>

        </div>
    )
}

export default Home