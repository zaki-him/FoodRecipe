import React from 'react'
import './favorites.css'
import Recipe from '../RecipeBox/Recipe'
import { GlobalContext } from '../../context'
import { useContext } from 'react'

const Favorites = () => {

  const {favoritesArray} = useContext(GlobalContext)

  return (
    <div className='flex justify-center gap-2 flex-wrap flex-1'>
      {favoritesArray && favoritesArray.length > 0 ? favoritesArray.map((recipe) => (
        <Recipe recipe = {recipe}/>
      )) : <p className='font-bold text-2xl'>No recipes. Add one.</p>}
    </div>
  )
}

export default Favorites