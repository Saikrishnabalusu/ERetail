import React from 'react'
import Header from './Components/Header'
import Restaurants from './pages/Restaurants'



const App = () => {
  return (
    <div className='w-[100vw] h-[100vh] p-1 bg-gray-100'>
      <Header />
      <Restaurants />
    </div>
  )
}

export default App
