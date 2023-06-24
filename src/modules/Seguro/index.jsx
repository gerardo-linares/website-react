import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";

const Seguro = () => {
  return (
    <main>
      <HeroService
        image={"./seguro.jpg"}
        alt={"house and key image"}
        title={"Seguro de Alquiler"}
        description={
          "Dos tipos de seguro para darte la solución más efectiva en materia de alquiler."
        }
      />
      <section className="container mx-auto">
        <h2 className="text-center">
          {" "}
          En Red Valore, entendemos lo importante que es para ti proteger tu
          inversión en el alquiler de una propiedad. Es por eso que ofrecemos
          dos tipos de seguro de alquiler, diseñados para brindarte la solución
          más efectiva y garantizarte una experiencia sin preocupaciones.
        </h2>

        <article className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden justify-center flex">
                <img
                  alt="content"
                  className="object-cover h-full w-1/2"
                  src="./seguro1.webp"
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      className="w-10 h-10"
                      fill="red"
                    >
                      <path d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V207l-42.4 17H304 272c-8.8 0-16 7.2-16 16v32 24.2V304c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8V461.7c68.2-33 91.5-99 95.4-149.7z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      Seguro de Daños y Responsabilidad Civil
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      Nuestro seguro de daños y responsabilidad civil te brinda
                      una cobertura integral en caso de daños causados a la
                      propiedad durante el período de alquiler.
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    Te protege de posibles reclamaciones de responsabilidad
                    civil, brindándote tranquilidad y seguridad. Protección ante
                    daños: El seguro de daños y responsabilidad civil te ofrece
                    una cobertura completa en caso de cualquier daño a la
                    propiedad durante el periodo de alquiler. Esto incluye daños
                    accidentales, incendios, inundaciones y más. Gestión
                    simplificada: Nuestro equipo se encargará de gestionar todos
                    los trámites y procesos relacionados con el seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden justify-center flex">
                <img
                  alt="content"
                  className="object-cover h-full w-1/2"
                  src="./seguro2.webp"
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                      className="w-10 h-10"
                      fill="red"
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      Seguro de Impago de Alquiler
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      Con nuestro seguro de impago de alquiler, puedes estar
                      tranquilo sabiendo que tu renta mensual está protegida.
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    En caso de que el inquilino no cumpla con sus obligaciones
                    de pago, el seguro cubrirá los pagos pendientes, asegurando
                    que sigas recibiendo los ingresos esperados. Al elegir
                    nuestro seguro de alquiler, podrás disfrutar del beneficio
                    de Tranquilidad financiera: Con el seguro de impago de
                    alquiler, evitas el riesgo de impagos y proteges tu flujo de
                    efectivo. No tendrás que preocuparte por las dificultades
                    financieras que pueden surgir debido a un inquilino moroso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <p className="text-center">
          {" "}
          En Red Valore, ofrecemos seguros de alquiler personalizados para
          propietarios e inquilinos. Nuestros seguros brindan confianza,
          protección y tranquilidad en tus transacciones de alquiler.
          Contáctanos para obtener más información sobre cómo asegurar tu
          inversión y garantizar una experiencia positiva y segura.
        </p>
      </section>
      <FormServices />
    </main>
  );
};

export default Seguro;
