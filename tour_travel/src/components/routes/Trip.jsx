import React from 'react'
import './Trip.css'
import TripData from './TripData'
import Trip1 from '../../assets/5.jpg'
import Trip2 from '../../assets/8.jpg'
import Trip3 from '../../assets/6.jpg'

const Trip = () => {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps</p>
        <div className="tripcard">

          <TripData
            image={Trip1}
            heading="Trip in Indonesia"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore voluptate facere unde rerum magnam vel pariatur quo dolorem. Voluptatibus quam aut tempora, vero quo quasi modi aliquid itaque veritatis aperiam omnis eos consequatur repudiandae dolore iusto autem. Nisi, error. Lorem ipsum dolor sit amet"
          ></TripData>

          <TripData
            image={Trip2}
            heading="Trip in Malaysia"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore voluptate facere unde rerum magnam vel pariatur quo dolorem. Voluptatibus quam aut tempora, vero quo quasi modi aliquid itaque veritatis aperiam omnis eos consequatur repudiandae dolore iusto autem. Nisi, error. Lorem ipsum dolor sit amet"
          ></TripData>

          <TripData
            image={Trip3}
            heading="Trip in France"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore voluptate facere unde rerum magnam vel pariatur quo dolorem. Voluptatibus quam aut tempora, vero quo quasi modi aliquid itaque veritatis aperiam omnis eos consequatur repudiandae dolore iusto autem. Nisi, error. Lorem ipsum dolor sit amet"
          ></TripData>
        </div>
      </div>
    </>
  )
}

export default Trip