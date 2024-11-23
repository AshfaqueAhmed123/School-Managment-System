import React from 'react'
import "./About.css"
import about_img from "../../../../assets/about.png"
import play_icon from "../../../../assets/play-icon.png"


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
                setPlayState(true)
            }} />
        </div>
        <div className="about-right">
            <h3>ABOUT COLLEGE</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
               Embark on a transformative educaional journey with our college's comprehensive education programs.  our cutting-edge curriculum is desgned to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education. 
            </p>
            <p>
                With a focus on innovation, hands-on Learning, and professionalized mentorship, our programs prepeare aspiring educators to make a meaningful impact in classrooms, schools and communities.
            </p>
            <p>
                Wheather you aspire to become a teacher, adminsitrator, conunsler, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potentialin shaping the future of education.
            </p>
        </div>
    </div>
  )
}

export default About