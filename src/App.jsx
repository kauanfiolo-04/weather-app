import React, { useState } from 'react'
import fetchData from './services/api'
import initialData from './helpers/initialData'

import Card from './components/Card/Card'

function App() {
  const [city, setCity]=useState('')
  const [data, setData]=useState(initialData)


  const handleSubmit=(e)=>{
    e.preventDefault() //impede de recarregar apos o submit

    fetchData(city).then((res)=>{
      setData(res)
    })
  }

  return (
    <div className="flex flex-col w2-full h-screen items-center sm:justify-center p-4">
      <form onSubmit={ handleSubmit } className='fixed bottom-0 w-full flex p-4 sm:relative justify-center'>
        <input 
          type='text'
          placeholder='City' 
          className='p-2 rounded-lg outline-none w-full sm:max-w-[300px] flex-1'
          value={city}
          onChange={({ target: { value } })=> setCity(value)}
        />
        <button 
          type="submit"
          className='bg-cyan-800 p-2 rounded-lg ml-3 text-white font-bold'
        >
          Search
        </button>
      </form>
      
      <Card data={data} />

    </div>
  )
}

export default App
