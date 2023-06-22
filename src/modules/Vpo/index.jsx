import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";
const Vpo = () => {
  return (
    <main>
      <HeroService
        image={"./vpo.webp"}
        title={"Vivienda de protección oficial"}
        description={
          "NOS ENCARGAMOS DE GESTIONAR LA DESCALIFICACION Y AUTORIZACION DE TU VIVIENDA DE PROTECCION OFICIAL"
        }
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            ¿Qué documentación necesitas aportar?
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-secondary mb-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="red"
                  className="w-6 h-6"
                >
                  <path d="M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Certificado de Adquisición
                </h2>
                <p className="leading-relaxed text-base">
                  Copia de la escritura o título público de adquisición de la
                  vivienda.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-secondary mb-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="red"
                  className="w-6 h-6"
                >
                  <path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Certificado de Calificación Definitiva de VPO
                </h2>
                <p className="leading-relaxed text-base">
                  Nº de expediente de calificación definitiva de VPO, o copia de
                  la cédula de calificación.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-secondary mb-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="red"
                  className="w-6 h-6"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Identificación Oficial
                </h2>
                <p className="leading-relaxed text-base">
                  Copia del DNI/NIF del titular/es de la vivienda.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-medium title-font text-center text-gray-900 mt-20">
            Con todo ello podremos realizar un presupuesto ajustado, una vez
            confirmado deberá firmarse una autorización para que se pueda
            iniciar el procedimiento.
            <span className="text-primary ">
              {" "}
              SOLICITE INFORMACIÓN SIN COMPROMISO
            </span>
          </h2>
        </div>
      </section>

      <FormServices />
    </main>
  );
};

export default Vpo;
