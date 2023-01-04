import React, { useState } from 'react'
import fetchData from './services/api'
import initialData from './helpers/initialData'

import Card from './components/Card/Card'

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState(initialData)
  const [checked, setChecked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault() //impede de recarregar apos o submit

      fetchData(city).then((res) => {
        setData(res)
      })
  }

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <div className="flex flex-col w2-full h-screen items-center sm:justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full flex p-4 sm:relative justify-center"
      >
        <input
          type="text"
          placeholder="City"
          className="p-2 rounded-lg outline-none w-full sm:max-w-[300px] flex-1"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-cyan-800 p-2 rounded-lg ml-3 text-white font-bold"
        >
          Search
        </button>
      </form>

      <div className='flex items-center jutify-center space-x-1 text-sky-600 font-bold text-md mt-4'>
        <input
          type="checkbox"
          name="temperature unit"
          className=''
          onChange={ handleCheck } 
        />
        <span>Check if you want to change the unit to Fahrenheit!</span>
      </div>

      <Card data={data} unit={checked ? 'F' : 'C'} />
    </div>
  )
}

export default App
