import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {RESTAURANT_API, CLOUDINARY_URL_PREFIX} from '../utils.js'

const Card = ({name, img, rating, cuisine, address})=>{
    return(
        <div className='w-48 h-64 rounded-md select-none p-2'>
            <img src={img} alt='restaurant-img' className='h-[60%] w-full rounded-t-md'/>
            <h2 className='mt-1 mb-1 truncate'>{name}</h2>
            <span className={`p-1 rounded-md mt-2 ${rating > 4 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{rating}&#9733;</span>
            <h3 className='text-sm text-ellipsis truncate mt-2'>{cuisine.join(', ')}</h3>
            <h4>{address}</h4>
        </div>
    )
}

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        
      const fetchRestaurants = async()=>{
        const response = await axios.get(RESTAURANT_API)
        // console.log(response?.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setRestaurants(response?.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      }
      fetchRestaurants()
    }, [])

  return (
    <div className='w-full h-[90%]  items-center p-4 overflow-y-scroll'>
        <h1 className='text-3xl font-bold'> Top Restaurants</h1>

        <div className='flex items-center flex-wrap gap-4 mt-4'>
            {restaurants.map((restaurant)=><Card key = {restaurant.info.id} name={restaurant.info.name} img={CLOUDINARY_URL_PREFIX + restaurant.info.cloudinaryImageId} rating={restaurant.info.avgRating} cuisine={restaurant.info.cuisines} address={restaurant.info.address}/>)}
            
        </div>


    </div>
  )
}

export default Restaurants