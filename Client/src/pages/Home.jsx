import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'

const Home = () => {
  return (
    // <div>
    <div className="w-full min-h-screen overflow-x-hidden">
     <Banner/>
     <Hero/>
     <Features/>
    </div>
  )
}

export default Home
