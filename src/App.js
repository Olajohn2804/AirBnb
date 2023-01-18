import React from 'react'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Card
        img="Frame1.png"
        rating={"5.0"}
        reviewCount={6}
        Country=' USA'
        title='Life lessons with Katie Zaferes'
        Price={136}
      />
    </>
  )
}

export default App