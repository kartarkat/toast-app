import React, { createContext, useState } from 'react'
import { restaurantConfig } from '../assets/config/restaurantConfig'

const initialFoodData = {}
export const FoodDataContext =  createContext(initialFoodData)

function FoodDataProvider({children}) {
    const [foodData, setFoodData] = useState(restaurantConfig)
    const value = {foodData, setFoodData}
  return (
    <FoodDataContext.Provider value={value}>
        {children}
    </FoodDataContext.Provider>
  )
}

export default FoodDataProvider