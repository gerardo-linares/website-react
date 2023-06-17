import React from "react";

const Hero = () => {
  return (
    <section
      className="container-full flex py-24 h-screen items-center justify-center flex-col"
      style={{
        backgroundImage: "url(https://dummyimage.com/720x600)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center  w-full overflow-auto">
        <h1 className="title-font text-4xl md:text-6xl mb-4 font-medium text-gray-900">
          "Trate con profesionales"
        </h1>
        <p className="mb-8 leading-relaxed text-xl md:text-2xl">
          Red imobiliaria en la ciudad de Madrid
        </p>
      </div>
    </section>
  );
};

export default Hero;
