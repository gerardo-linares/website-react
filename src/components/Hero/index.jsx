import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 200,
    });
  }, []);

  return (
    <section
      className="container-full flex py-24 h-screen items-center justify-center flex-col mb-[50px] relative"
      id="Inicio"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="./videoooo.mp4" type="video/mp4" />
        Tu navegador no admite la reproducción de video.
      </video>
      <div
        className="text-center w-full z-10"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <h1 className=" text-white font-slogan text-5xl md:text-7xl">
          "Trate con Profesionales"
        </h1>
        <p className="leading-relaxed text-sm md:text-xl text-gray-300">
          <span className="text-red-600 font-bold">Red inmobiliaria</span> en la
          ciudad de Madrid
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
