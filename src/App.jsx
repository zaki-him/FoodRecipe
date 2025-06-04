import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import Favorites from './components/Favorites/Favorites'
import Details from './components/Details/Details'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Header />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/recipe-item/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
