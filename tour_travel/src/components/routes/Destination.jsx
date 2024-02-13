import Mountain1 from "../../assets/1.jpg"
import Mountain2 from "../../assets/2.jpg"
import Mountain3 from "../../assets/3.jpg"
import Mountain4 from "../../assets/4.jpg"
import './Destination.css'
import React from 'react'
import DestinationData from "./DestinationData"

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a timeframe</p>


        <DestinationData
          className="first-des"
          heading="Taal volcano, Batangas"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore voluptate facere unde rerum magnam vel pariatur quo dolorem. Voluptatibus quam aut tempora, vero quo quasi modi aliquid itaque veritatis aperiam omnis eos consequatur repudiandae dolore iusto autem. Nisi, error. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat repellendus aspernatur quis natus numquam"
          img1={Mountain1} img2={Mountain2}>
        </DestinationData>

        <DestinationData
          className="first-des-reverse"
          heading="Taal volcano, Batangas"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore voluptate facere unde rerum magnam vel pariatur quo dolorem. Voluptatibus quam aut tempora, vero quo quasi modi aliquid itaque veritatis aperiam omnis eos consequatur repudiandae dolore iusto autem. Nisi, error. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat repellendus aspernatur quis natus numquam"
          img1={Mountain3} img2={Mountain4}>
        </DestinationData>


      </div>
    </>
  )
}

export default Destination