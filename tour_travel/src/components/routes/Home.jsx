import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero'
import AboutImg from "../../assets/12.jpg"
import Destination from './Destination'
import Trip from './Trip'
import Footer from './Footer'



const Home = () => {
  return (
    <>
      <Navbar></Navbar>

      <Hero cName="hero" heroImg={AboutImg} title="Your Journey Your Story" text="Choose Your Favourite Destination" buttonText="Travel Plan" url="/" btnClass="show"></Hero>

      <Destination></Destination>

      <Trip></Trip>

      <Footer></Footer>

    </>
  )
}

export default Home