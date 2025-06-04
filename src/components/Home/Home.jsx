import React from 'react'
import { GlobalContext } from '../../context'
import { useContext } from 'react'
import Recipe from '../RecipeBox/Recipe'

const Home = () => {

  const {recipeList} = useContext(GlobalContext)

  return (
    <div className='flex justify-center gap-2 flex-wrap flex-1'>
      {recipeList && recipeList.length > 0 ? recipeList.map((recipe) => (
        <Recipe recipe = {recipe}/>
      )) : <p className='font-bold text-2xl'>No recipes. Try searching.</p>}
    </div>
  )
}

export default Home