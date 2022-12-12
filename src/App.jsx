import React from 'react'

function App() {
  return (
    <div className="flex w2-full h-screen items-center justify-center">
      <form>
        <input 
          type='text'
          placeholder='City' 
          className='p-2 rounded-lg outline-none '
        />
        <button 
          type="submit"
          className='bg-cyan-800 p-2 rounded-lg ml-3 text-white font-bold'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default App
