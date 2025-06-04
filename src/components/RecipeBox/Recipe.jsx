import React from 'react'
import './recipe.css'
import { Link } from 'react-router-dom'
const Recipe = ({recipe}) => {
  return (
    <div className='box'>
      <div className='image'>
        <img src={recipe.image_url} alt="" />
      </div>
      <div className='content'>
        <span>{recipe.publisher}</span>
        <p>{recipe.title}</p>
        <Link to={`/recipe-item/${recipe.id}`} className='btn'>RECIPE DETAILS</Link>
      </div>
    </div>
  )
}

export default Recipe