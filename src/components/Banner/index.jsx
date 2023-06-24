import React from "react";

const Banner = () => {
  return (
    <section
      className="container-full mx-auto flex px-5 py-24 h-[600px] items-center justify-center flex-col mt-12'"
      style={{
        backgroundImage: "url(./banner.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font md:text-7xl text-4xl mb-4 font-medium text-gray-100 drop-shadow-lg">
          ¿Como Podemos ayudarle?
        </h1>
        <h2 className="title-font md:text-4xl text-2xl mb-4 hidden md:inline-block text-gray-200">
          dinos a que hora le viene bien...
        </h2>
        <p className="mb-8 leading-relaxed text-gray-300 ">
          Dejanos tu datos y nos pondremos en contacto contigo
        </p>
      </div>
    </section>
  );
};

export default Banner;
