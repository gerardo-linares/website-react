import React from "react";

const OurService = () => {
  return (
    <section className="text-gray-600 body-font my-10 ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Les ofrecemos
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Servicios de calidad orientados a cumplir con las más altas
            exigencias...
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
            <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px] ">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="./valoracion.webp"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Valoración Gratuita
              </h2>
              <p className="leading-relaxed text-base">
                La valoración gratuita de inmuebles. Para que el cliente pueda
                saber el valor real de su vivienda en el mercado.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
            <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px]">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="./nudaprop.webp"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Nuda Propiedad
              </h2>
              <p className="leading-relaxed text-base">
                ¿Te gustaría vender tu piso y seguir viviendo en él de por vida?
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
            <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px]">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="./digital.webp"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Digitalización de Activos
              </h2>
              <p className="leading-relaxed text-base">
                Apostamos por las nuevas tecnologías y la digitalización de
                activos inmobiliarios.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
            <div className="bg-gray-100 p-6 rounded-lg md:min-h-[400px] max-w-[490px]">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="./vpo.webp"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Viviendas VPO
              </h2>
              <p className="leading-relaxed text-base">
                Gestión y tramitación de la descalificación y autorización de
                venta de Viviendas Protegidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
