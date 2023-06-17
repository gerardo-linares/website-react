import React from "react";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Acerca de nosotros
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1 p-2">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 shadow-xl">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="./comandante1.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 shadow-xl">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="./francos.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-full shadow-xl">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="./francos2.webp"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full shadow-xl">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/Mostoles5.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 shadow-xl">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/Mostoles11.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 shadow-xl">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="./comandante2.webp"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1 p-2">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 shadow-xl">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="./Alcorcon2.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 shadow-xl">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="./Alfredo2.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-full shadow-xl">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="./Ferrer.webp"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full shadow-xl">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="./Comandante4.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 shadow-xl">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="./Alcorcon.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 shadow-xl">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="./Comandante3.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
