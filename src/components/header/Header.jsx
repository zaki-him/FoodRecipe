import React , { useContext } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/index'

const Header = () => {

  const {search , setSearch , handleSubmit} = useContext(GlobalContext)

  console.log(search)

  return (
    <header>
      <Link to={'/'} className='logo'>FoodRecipe</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter items...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
      </form>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/favorites'}>Favorites</Link>
      </div>
    </header>
  )
}

export default Header