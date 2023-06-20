import React from "react";
import Hero from "../../components/Hero";
import Gallery from "./../../components/Gallery/index";
import Contact from "../../components/Contact";
import OurService from "../../components/OurService";
import About from "../../components/About";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <OurService />
      <Gallery />
      <Banner />
      <Contact />
    </main>
  );
};

export default Home;
