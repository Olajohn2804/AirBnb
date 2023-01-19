import React from 'react'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Dataelement from '../src/Data.js'
const App = () => {
  const cardData = Dataelement.map((data,index)=>{
      return <Card 
      key={index}
      // data={data}
      {...data}
      // img={image} 
      // rating={data.stats.rating}
      // reviewCount={data.stats.reviewCount}
      // location={data.location}
      // title={data.title}
      // Price={data.price}
      // status={data.openSpots}
      />
  })
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className='card-wrapper'>
      {cardData}
      </div>
    </>
  )
}

export default App