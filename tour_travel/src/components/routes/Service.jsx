import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero'
import AboutImg from "../../assets/night.jpg"
import Footer from './Footer'
import Trip from './Trip'



const Service = () => {
  return (
    <>
      <Navbar></Navbar>

      <Hero cName="hero-mid" heroImg={AboutImg} title="Service" buttonText="Travel Plan" url="/" btnClass="hide"></Hero>

      <Trip></Trip>

      <Footer></Footer>

    </>
  )
}

export default Service