import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero'
import AboutImg from "../../assets/2.jpg"
import Footer from './Footer'
import Contactform from './Contactform'



const Contact = () => {
  return (
    <>
      <Navbar></Navbar>

      <Hero cName="hero-mid" heroImg={AboutImg} title="Contact" buttonText="Travel Plan" url="/" btnClass="hide"></Hero>

      <Contactform></Contactform>

      <Footer></Footer>
    </>
  )
}

export default Contact