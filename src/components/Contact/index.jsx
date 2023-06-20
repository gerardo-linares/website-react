import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación en milisegundos
      offset: 200, // Desplazamiento (en píxeles) desde el borde superior del elemento para activar la animación
    });
  }, []);

  return (
    <section
      className="text-gray-600 body-font relative bg-slate-50"
      id="Contacto"
    >
      <div className="container m-auto px-5 pt-8  ">
        <h1 className=" sm:text-4xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
          Contacto
          <div className="h-1 w-20 bg-primary rounded"></div>
        </h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          ¿Buscando la propiedad perfecta? Déjanos tus datos de contacto y nos
          comunicaremos contigo enseguida.
        </p>
      </div>

      <div className="absolute inset-0 bg-gray-300 top-40">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps?q=Calle%20Aviador%20Zorita%207%2C%20Madrid%2C%20CP%3A%2028020&t=&z=15&ie=UTF8&output=embed"
          w="100%"
          h="500"
          allowFullScreen=""
          loading="lazy"
          style={{ filter: "grayscale(0.5) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>

      <div
        className="container px-5 py-24 mx-auto flex aos"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">
            Más Información
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            En Red Valore le ofrecemos, desde el año 1996 nuestra amplia
            experiencia en servicios inmobiliarios. Somos un equipo de
            profesionales dedicados a encontrar la vivienda perfecta para usted.
            Nuestros servicios incluyen{" "}
            <span className="text-primary">
              Ventas, Alquileres, Relocation{" "}
            </span>{" "}
            y <span className="text-primary"> Home Staging</span>
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Messageclass
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
            Enviar
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
