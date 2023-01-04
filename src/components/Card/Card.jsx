import React from 'react'
import propTypes from 'prop-types'

function Card({ data, unit }) {

  const {
    location,
    current,
  } = data

  const Unit = (unit)=>{
    if(unit=='C'){
      return current.temp_c
    }else{
      return current.temp_f
    }
  }

  return (
    <div className='bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]'>
      <div className='text-center'>
        <span className='block text-xl font-bold text-slate-700'>{location.name}</span>
        <span className='text-slate-500 text-sm font-medium'>{location.region}, {location.country}</span>
      </div>

      <div className='font-bold text-slate-700 flex mt-4 mb-2 justify-center'>
        <span className='text-8xl'>{Unit(unit)}</span>
        <span className='text-2xl mt-5'>{`º${unit}`}</span>
      </div>

      <div className='flex items-center flex-col justify-center'>
        <img alt='Weather Icon' className='block' src={current.condition.icon}/>
        <span className='text-slate-700 font-medium'>{current.condition.text}</span>
      </div>
    </div>
  )
}

export default Card

Card.propTypes={
  data: propTypes.object,
}.isRequired
