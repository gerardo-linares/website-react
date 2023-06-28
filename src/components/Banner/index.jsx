import React from "react";
import bannerImage from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="container-full mx-auto ">
      <div
        alt="imagen de la casa"
        className="bg-no-repeat bg-center bg-fixed h-[400px]  flex justify-center items-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="text-center w-full">
          <h1 className="text-4xl md:text-6xl font-medium text-gray-100 mb-4 drop-shadow-lg">
            ¿Cómo podemos ayudarle?
          </h1>
          <h2 className="text-2xl md:text-4xl mb-4  text-gray-200">
            Dinos a qué hora le viene bien...
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Déjanos tus datos y nos pondremos en contacto contigo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
