import React from "react";

const Banner = () => {
  return (
    <section
      className="container-full mx-auto flex px-5 py-24 h-[600px] items-center justify-center flex-col"
      style={{
        backgroundImage: "url(./banner.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font md:text-7xl text-6xl mb-4 font-medium text-gray-100 drop-shadow-lg">
          ¿Como Podemos ayudarle?
        </h1>
        <h2 className="title-font md:text-4xl text-3xl mb-4  text-gray-200">
          dinos a que hora le viene bien...
        </h2>
        <p className="mb-8 leading-relaxed text-gray-300 text-xl ">
          Dejanos tu datos y nos pondremos en contacto contigo
        </p>
      </div>
    </section>
  );
};

export default Banner;
