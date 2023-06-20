import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";

const Certificado = () => {
  return (
    <main>
      <HeroService
        image={"./certificado.webp"}
        title={"Certificado Energético"}
        description={
          "La valoración gratuita de inmuebles. Para que el cliente pueda saber el valor real de su vivienda en el mercado."
        }
      />

      <h1>
        El certificado energético es un documento necesario y obligatorio en el
        proceso de alquiler de viviendas. Proporciona información sobre la
        eficiencia energética de la vivienda, indicando su consumo de energía y
        emisiones de CO2. Este certificado se representa mediante una
        calificación que va desde la letra A (más eficiente) hasta la G (menos
        eficiente). Es importante para los inquilinos, ya que les permite
        conocer los posibles gastos de energía antes de alquilar la vivienda.
        Además, sin el certificado energético, la transacción inmobiliaria puede
        ser declarada inválida y pueden aplicarse sanciones económicas. El
        certificado energético incluye datos sobre las características
        energéticas del inmueble, como calefacción, refrigeración, iluminación,
        y otros aspectos que influyen en su eficiencia. También debe identificar
        el edificio o vivienda certificada, indicar el procedimiento utilizado
        para la calificación y cumplir con la normativa vigente. En resumen, el
        certificado energético es esencial en el alquiler de viviendas, ya que
        proporciona información sobre la eficiencia energética y ayuda a tomar
        decisiones informadas sobre el consumo y costos de energía.
      </h1>

      <FormServices />
    </main>
  );
};

export default Certificado;
