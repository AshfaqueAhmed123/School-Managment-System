import React, { useState } from "react";
import "./HomePage.css"
import Navbar from "../../components/custom/homePage/Navbar/Navbar";
import Hero from "../../components/custom/homePage/Hero/Hero";
import Programs from "../../components/custom/homePage/programs/Programs";
import Title from "../../components/custom/homePage/Title/Title";
import About from "../../components/custom/homePage/About/About";
import College from "../../components/custom/homePage/College/College";
import Testimonials from "../../components/custom/homePage/Testimonials/Testimonials";
import ContactSection from "../../components/custom/homePage/Contact/Contact";
import Footer from "../../components/custom/homePage/Footer/Footer";
import VideoPlayer from "../../components/custom/homePage/videoplayer/VideoPlayer";

const HomePage = () => {

  const [playState,setPlayState] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="custom-container">
        <Title subtitle={"Our PROGRAM"} title={"What We Offer"} />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle={"Gallery"} title={"College Memories"} />
        <College />
        <Title subtitle={"TESTIMONIALS"} title={"What Sudents Says"} />
        <Testimonials />
        <Title subtitle={"Contact US"} title={"Get In Touch"} />
        <ContactSection />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default HomePage;