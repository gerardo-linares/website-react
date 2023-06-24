import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";

const Digital = () => {
  return (
    <main>
      <HeroService
        image={"./digital.webp"}
        alt={"digital house image"}
        title={"Digitalización de Activos"}
        description={
          "Apostamos por las nuevas tecnologías y la digitalización de activos inmobiliarios"
        }
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10  text-center">
            <div className="flex flex-col mb-10  items-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-secondary mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="red
                  "
                  className="w-12 h-12"
                >
                  <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
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
                <p className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-secondary mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="red"
                  className="w-12 h-12"
                >
                  <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" />
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
                <p className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10  items-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-secondary mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="red"
                  className="w-12 h-12"
                >
                  <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
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
                <p className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                </p>
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
    </main>
  );
};

export default Digital;
