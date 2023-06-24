import React from "react";
import Hero from "../../components/Hero";
import Gallery from "./../../components/Gallery/index";
import Contact from "../../components/Contact";
import OurService from "../../components/OurService";
import About from "../../components/About";
import Banner from "../../components/Banner";
import WhatsApp from "../../components/WhatsApp";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <OurService />
      <Gallery />
      <Banner />
      <Contact />
      <WhatsApp />
    </main>
  );
};

export default Home;
