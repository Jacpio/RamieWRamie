import { useState } from 'react'
import './output.css'
import Navbar from "./Elements/Navbar";
import Banner from './Elements/Banner.jsx'
import MainSection from "./Elements/MainSection.jsx";
function App() {

  return (
    <>
        <Navbar />
        <Banner />
        <MainSection />
    </>
  )
}

export default App
