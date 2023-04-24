import React, { useState } from 'react'

// data
import cityData from "../../cityData"

// component
import CityButton from '../../components/CityButton'

// icons
import { AiOutlineSearch } from "react-icons/ai"
function CityList() {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>

            <div className="relative w-72 md:w-96 mx-auto my-16">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiOutlineSearch className='text-indigo-200 text-lg' />
                </div>
                <input type="search" className="block w-72 md:w-96 p-4 pl-12 text-sm border border-indigo-200 rounded-lg bg-bg focus:ring-zinc-500 focus:border-zinc-500 text-white " placeholder="Şehir Ara" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center'>
                {cityData.filter((val) => {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.name?.toLocaleLowerCase().includes(searchTerm?.toLocaleLowerCase())) {
                        return val;
                    }
                }).map((val) => {

                    return (
                        <CityButton id={val.id} name={val.name} key={val.id}/>
                    )

                })
                }
            </div>



        </div>
    )
}

export default CityList