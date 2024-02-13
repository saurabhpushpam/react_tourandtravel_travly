import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero'
import AboutImg from "../../assets/night.jpg"
import Footer from './Footer'
import Aboutus from './Aboutus'


const About = () => {
  return (
    <>
      <Navbar></Navbar>

      <Hero cName="hero-mid" heroImg={AboutImg} title="About" buttonText="Travel Plan" url="/" btnClass="hide"></Hero>

      <Aboutus></Aboutus>

      <Footer></Footer>
    </>
  )
}

export default About