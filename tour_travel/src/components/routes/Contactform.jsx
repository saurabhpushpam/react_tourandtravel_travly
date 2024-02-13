import React from 'react'
import './Contactform.css'

const Contactform = () => {
  return (
    <>
      <div className="form-container">
        <form action="">
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Subject' />
          <textarea name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  )
}

export default Contactform