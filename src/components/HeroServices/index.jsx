import React from "react";

const HeroService = ({ image, title, description, alt }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container  mx-auto flex px-5 items-center justify-center flex-col ">
        <img
          className="w-full h-[500px] object-cover object-center rounded mt-[120px]"
          alt={alt}
          src={image}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 pt-5 font-medium text-gray-900">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroService;
