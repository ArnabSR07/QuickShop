import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FlashSales from '../components/FlashSales'
import Categories from '../components/Categories'
import Hero2 from '../components/Hero2'
import Collection from '../components/Collection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='m-auto'>
        <Navbar/>
        <Hero/>
        <FlashSales/>
        <Categories/>
        <Hero2/>
        <Collection/>
        <Footer/>
    </div>
  )
}

export default Home