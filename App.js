import React from 'react'
import searchIcon from "./Stores/searchIcon.svg"

const Header = () => {
  return (
    <div className='w-[100vw] h-20 flex items-center p-2 my-1 gap-4 bg-white shadow-md select-none'>
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-11f9e2.svg" className='w-20 h-10' alt="Flipkart"></img>
    
        <input type="search" placeholder='search products and more...' className='border-2 border-gray-300 rounded-md  px-2 w-1/2 h-8 mx-4'></input>
       
  
      <button className='bg-blue-600 text-white px-4 py-1 rounded-md'>Login</button>
      <div className='font-bold w-4 h-4 flex justify-center items-center'>Cart</div>
    </div>
  )
}

const App = () => {
  return (
    <div className='w-[100vw] h-[100vh] p-1 bg-gray-100'>
        <Header />
    </div>
  )
}

export default App