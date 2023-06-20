import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
    });
  }, []);

  return (
    <section className="container m-auto">
      <article
        className="text-gray-600 body-font bg-slate-50 aos"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-5">
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900">
              Red Inmobiliaria
              <br className="hidden lg:inline-block " />
            </h1>
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
              Líder en Madrid
            </h1>
            <p className="mb-8 leading-relaxed">
              Más de 25 años de servicio ininterrumpido al cliente hacen de
              nuestra gestión un marca de identidad, cuya principal actividad se
              centra en el <strong>asesoramiento constante</strong> a nuestros
              clientes, en la administración de sus inmuebles y en la
              realización de todo tipo de{" "}
              <strong>operaciones inmobiliarias</strong>.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./Comandante4.webp"
            />
          </div>
        </div>
      </article>

      <article
        className="text-gray-600 body-font aos"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./Alcorcon.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center gap-5">
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900">
              ¿Por qué Elegirnos?
              <br className="hidden lg:inline-block " />
            </h1>
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
              En <span className="text-primary font-semibold">Red Valore</span>{" "}
              estaremos encantados de poder ayudarle
            </h1>
            <p className="mb-8 leading-relaxed">
              <strong>
                Especializados en la comercialización de inmuebles y gestiones
                de venta, así como en el análisis de inversiones inmobiliarias.
                Nos hemos ganado el prestigio de estar entre las mejores
                agencias inmobiliarias de Madrid.
              </strong>
              <br />
              El conocimiento del mercado inmobiliario y nuestra experiencia en
              la venta de pisos, junto con una toma de fotografías y
              presentación de la vivienda de la mejor manera posible son
              cruciales.
              <br />
              Cuente con la experiencia y el asesoramiento de la mejor Red
              Inmobiliaria de Madrid para un proceso sin sobresaltos, una
              negociación adecuada y la representación de los intereses de los
              propietarios por encima de todo durante todo el proceso de la
              venta, <strong>al mejor precio y plazo posible.</strong>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
