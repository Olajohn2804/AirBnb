import React from 'react'
import frame from '../images/Frame.png'
const Hero = () => {
  return (
    <>
        <div className="hero">
            <img src={frame} alt="" />
            <h2>Online Expreriences</h2>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </>
  )
}

export default Hero