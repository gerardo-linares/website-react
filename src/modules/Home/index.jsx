import React from "react";
import Hero from "../../components/Hero";
import Gallery from "./../../components/Gallery/index";
import Contact from "../../components/Contact";
import OurService from "../../components/OurService";
import About from "../../components/About";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <OurService />
      <Gallery />
      <Banner />
      <div>
        <h2 className="text-bold text-center text-3xl py-8">Contacto</h2>
      </div>
      <Contact />
    </>
  );
};

export default Home;
