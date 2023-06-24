import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OurService = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="text-gray-600 body-font md:py-10" id="Servicios">
      <div className="container px-5 pt-10 mt-5 mx-auto">
        <div className="flex flex-wrap w-full mb-20 md:px-12">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
              Les Ofrecemos
            </h1>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full  text-gray-500">
            Ofrecemos servicios integrales: compra, venta y alquiler de
            propiedades residenciales y comerciales. También brindamos
            tasaciones, gestión de propiedades y asistencia legal. Confía en
            nosotros para tus objetivos inmobiliarios.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div
            className="xl:w-1/4 md:w-1/2 p-4 m-auto"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <Link to="/valoracion " onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px] flex flex-col justify-between ">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./valoracion.webp"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                  RED
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Valoración Gratuita
                </h2>
                <p className="leading-relaxed text-base">
                  La valoración gratuita de inmuebles. Para que el cliente pueda
                  saber el valor real de su vivienda en el mercado.
                </p>
                <p className="leading-relaxed text-primary text-center opacity-60">
                  Más Info...
                </p>
              </div>
            </Link>
          </div>
          <div
            className="xl:w-1/4 md:w-1/2 p-4 m-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <Link to="/nudapropiedad" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px] flex flex-col justify-between">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./nudaprop.webp"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                  RED
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Nuda Propiedad
                </h2>
                <p className="leading-relaxed text-base">
                  ¿Te gustaría vender tu piso y seguir viviendo en él de por
                  vida?
                </p>
                <p className="leading-relaxed text-primary text-center opacity-60">
                  Más Info...
                </p>
              </div>
            </Link>
          </div>
          <div
            className="xl:w-1/4 md:w-1/2 p-4 m-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Link to="/digitalizacion" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px] flex flex-col justify-between">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./digital.webp"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                  RED
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Digitalización de Activos
                </h2>
                <p className="leading-relaxed text-base">
                  Apostamos por las nuevas tecnologías y la digitalización de
                  activos inmobiliarios.
                </p>
                <p className="leading-relaxed text-primary text-center opacity-60">
                  Más Info...
                </p>
              </div>
            </Link>
          </div>
          <div
            className="xl:w-1/4 md:w-1/2 p-4 m-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <Link to="/vpo" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px] flex flex-col justify-between">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./vpo.webp"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                  RED
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Viviendas VPO
                </h2>
                <p className="leading-relaxed text-base">
                  Gestión y tramitación de la descalificación y autorización de
                  venta de Viviendas Protegidas.
                </p>
                <p className="leading-relaxed text-primary text-center opacity-60">
                  Más Info...
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div
            className="xl:w-1/4 md:w-1/2 p-4 m-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <Link to="/certificado" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px] flex flex-col justify-between ">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./certificado.webp"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                  RED
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Certificado Energético
                </h2>
                <p className="leading-relaxed text-base">
                  La valoración gratuita de inmuebles. Para que el cliente pueda
                  saber el valor real de su vivienda en el mercado.
                </p>
                <p className="leading-relaxed text-primary text-center opacity-60">
                  Más Info...
                </p>
              </div>
            </Link>
          </div>
          <div
            className="xl:w-1/4 md:w-1/2 p-4 m-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <Link to="/cartera" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px] flex flex-col justify-between">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./cartera.webp"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                  RED
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Cartera Propia
                </h2>
                <p className="leading-relaxed text-base">
                  ¿Te gustaría vender tu piso y seguir viviendo en él de por
                  vida?
                </p>
                <p className="leading-relaxed text-primary text-center opacity-60">
                  Más Info...
                </p>
              </div>
            </Link>
          </div>
          <div
            className="xl:w-1/4 md:w-1/2 p-4 m-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <Link to="/seguro" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px] flex flex-col justify-between">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./seguro.webp"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                  RED
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Seguros de Alquiler
                </h2>
                <p className="leading-relaxed text-base">
                  Apostamos por las nuevas tecnologías y la digitalización de
                  activos inmobiliarios
                </p>
                <p className="leading-relaxed text-primary text-center opacity-60">
                  Más Info...
                </p>
              </div>
            </Link>
          </div>
          <div
            className="xl:w-1/4 md:w-1/2 p-4 m-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="700"
          >
            <Link to="/franquicia" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px] flex flex-col justify-between">
                <img
                  className="h-40 rounded md:w-full w-[450px] object-cover object-center mb-6"
                  src="./franquicia.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                  RED
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Franquicias Red Valore
                </h2>
                <p className="leading-relaxed text-base">
                  Expande tu Negocio Inmobiliario con Nosotros
                </p>
                <p className="leading-relaxed text-primary text-center opacity-60">
                  Más Info...
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-1/2 mx-auto mt-20" />
    </section>
  );
};

export default OurService;
