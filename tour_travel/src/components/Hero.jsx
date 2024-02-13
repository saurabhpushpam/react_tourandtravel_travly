import React from 'react'
import './Hero.css'

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        {/* <img src="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxtb3VudGFpbiUyMGplZXB8ZW58MHx8MHx8fDA%3D" alt="hero image" /> */}


        <img src={props.heroImg} alt="hero image" />


        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>

      </div>
    </>
  )
}

export default Hero