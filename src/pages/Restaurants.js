import React, { useEffect, useState } from 'react'

const Card = ({name, img, rating, cuisine, address})=>{
    return(
        <div className='w-48 h-64 bg-slate-300 rounded-md select-none p-2'>
            <img src={img} alt='restaurant-img' className='h-[60%] w-full rounded-t-md'/>
            <h2>{name}</h2>
            <h4>{rating}</h4>
            <h3>{cuisine}</h3>
            <h4>{address}</h4>
        </div>
    )
}

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        //fetch restaurant data from swiggy api
        
    })

  return (
    <div className='w-full h-[90%]  items-center bg-amber-200'>
        <h1 className='text-3xl font-bold'> Top Restaurants</h1>

        <div className='flex items-center flex-wrap gap-4 mt-4'>
            <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>


    </div>
  )
}

export default Restaurants