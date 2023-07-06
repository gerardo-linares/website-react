import React from "react";

const Banner = () => {
  return (
    <div
      alt="imagen de la casa"
      className=" container-full mx-auto bg-no-repeat bg-center bg-banner bg-cover  h-[350px]  flex justify-center items-center lg:bg-fixed "
    >
      <div className="text-center w-full">
        <h1 className="text-4xl md:text-6xl font-medium text-gray-100 mb-4 drop-shadow-lg">
          ¿Cómo podemos ayudarle?
        </h1>
        <h2 className="text-2xl md:text-4xl mb-4  text-gray-200">
          Dinos a qué hora le viene bien...
        </h2>
        <p className="text-gray-300 leading-relaxed hidden md:inline-block  mb-8">
          Déjanos tus datos y nos pondremos en contacto contigo
        </p>
      </div>
    </div>
  );
};

export default Banner;
