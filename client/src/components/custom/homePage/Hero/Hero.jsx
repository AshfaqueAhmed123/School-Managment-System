import React from 'react'
import "./Hero.css"
import dark_arrow from "../../../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero flex items-center justify-center gap-3'>
        <div className="hero-text text-center text-6xl font-bold max-w-[900px]">
            <h1>We Ensure better education for a better world</h1>
            <p className='text-[20px] max-w-[900px] mt-2 mx-0 mb-2' style={{lineHeight:1.4}}>
                our cutting-edge curriculum is desgned to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education
            </p>
            <button className='btn m-auto mt-4'>
                Explore more
                <img src={dark_arrow} alt=">" className='w-[20px] ml-4' />
            </button>
        </div>
    </div>
  )
}

export default Hero