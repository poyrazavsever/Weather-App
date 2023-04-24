import React from 'react'

function CityButton({ id, name }) {
  return (
    <button className='rounded-3xl border border-zinc-600 group bg-transparent w-48 h-14 px-3 text-white flex justify-center items-center gap-4 relative hover:bg-indigo-600 hover:border-indigo-600 transition-all'>
      <span className='text-sm w-8 h-8 rounded-full flex items-center justify-center bg-indigo-600 absolute left-3 group-hover:bg-white group-hover:text-bg transition-all'>{id}</span>
      <span className='text-sm'>{name}</span>
    </button>
  )
}

export default CityButton