import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";

const Certificado = () => {
  return (
    <main>
      <HeroService
        image={"./certificado.webp"}
        alto={"energy certificate image"}
        title={"Certificado Energético"}
        description={
          "Certificado de Eficiencia Energética gratuito para todos nuestos clientes"
        }
      />
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center px-5">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {" "}
              Certificado de Eficiencia: Información Esencial
            </h1>
            <p className="mb-8 leading-relaxed">
              {" "}
              El certificado energético es un documento necesario y obligatorio
              en el proceso de alquiler de viviendas. Proporciona información
              sobre la eficiencia energética de la vivienda, indicando su
              consumo de energía y emisiones de CO2. Esta calificación, que va
              desde la letra A hasta la G, permite a los inquilinos conocer los
              gastos de energía antes de alquilar. Sin el certificado, la
              transacción puede ser inválida y conlleva sanciones económicas.
              Además, el certificado detalla las características energéticas del
              inmueble y cumple con la normativa vigente.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./efi_energetica.webp"
            />
          </div>
        </div>
      </section>

      <FormServices />
    </main>
  );
};

export default Certificado;
