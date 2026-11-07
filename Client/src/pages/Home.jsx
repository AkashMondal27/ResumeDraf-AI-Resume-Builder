import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Testimonial from '../components/home/Testimonial'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    // <div>
    <div className="w-full min-h-screen overflow-x-hidden">
     <Banner/>
     <Hero/>
     <Features/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Home
