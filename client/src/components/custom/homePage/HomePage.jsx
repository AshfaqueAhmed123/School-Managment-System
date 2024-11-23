import React, { useState } from "react";
import "./HomePage.css"
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Programs from "./programs/Programs";
import Title from "./Title/Title";
import About from "./About/About";
import College from "./College/College";
import Testimonials from "./Testimonials/Testimonials";
import ContactSection from "./Contact/Contact";
import Footer from "./Footer/Footer";
import VideoPlayer from "./videoplayer/VideoPlayer";

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
