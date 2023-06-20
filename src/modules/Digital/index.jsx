import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";

const Digital = () => {
  return (
    <div>
      <HeroService
        image={"./digital.webp"}
        title={"Digitalización de Activos"}
        description={
          "Apostamos por las nuevas tecnologías y la digitalización de activos inmobiliarios"
        }
      />
      <section classNameName="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10  text-center">
            <div className="flex flex-col mb-10  items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Tours Virtuales
                </h2>
                <p className="leading-relaxed text-base">
                  Implementamos la tecnología virtual 360º para las visitas de
                  nuestros inmuebles, un recorrido por el interior de la
                  vivienda, ahorrándote tiempo y simplificando las visitas a
                  pisos, casas, locales comerciales e incluso naves
                  industriales. Viajaras a aquel inmueble que estés interesado
                  en visitar tan solo a un clic en tu ordenador, tablet o
                  teléfono móvil.
                </p>
                <a className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Modelado 3D y 3D Cenital
                </h2>
                <p className="leading-relaxed text-base">
                  Comprueba la verdadera esencia de la vivienda de acuerdo a sus
                  especificaciones y medidas. Un escenario tridimensional que
                  muestra la realidad del inmueble: habitaciones, diseño,
                  tamaño… factores que podrá comprobar con sólo un vistazo y que
                  le permitirán tener una imagen real del inmueble que está
                  buscando.
                </p>
                <a className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10  items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Imágenes 4K y Video
                </h2>
                <p className="leading-relaxed text-base">
                  Con la tecnología en alta definición que nos ofrece el 4K,
                  podrá disponer de fotos y videos más realistas y con mayor
                  detalle de cada vivienda. Te ayudamos a hacerte una idea más
                  general del inmueble en el que estás interesado.
                </p>
                <a className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-xl">
          {" "}
          Tenemos lo que realmente necesitas…{" "}
          <span className=" font-slogan">¡Trata con Profesionales!</span>
        </h1>
      </section>

      <FormServices />
    </div>
  );
};

export default Digital;
