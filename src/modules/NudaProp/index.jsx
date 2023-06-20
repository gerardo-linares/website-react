import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";

const NudaProp = () => {
  return (
    <main>
      <HeroService
        image={"./nudaprop.webp"}
        title={"Nuda Propiedad"}
        description={
          "¿Te gustaría vender tu piso y seguir viviendo en él de por vida?"
        }
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10  text-center">
            <div className="flex flex-col mb-10  items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  ¿Qué es la nuda propiedad?
                </h2>
                <p className="leading-relaxed text-base">
                  Si tienes una vivienda en propiedad existe la opción de vender
                  tu casa pudiendo seguir viviendo en ella, a través de la nuda
                  propiedad, la cual permite a dicha persona disfrutar y vivir
                  en su casa de toda la vida sin tener la posesión de la misma.
                  Está opción es beneficiosa para aquellos que no tienen
                  herederos, las personas mayores que desean aumentar sus
                  ingresos y así vivir de manera más cómoda, disfrutando de su
                  tiempo libre y para aquellos que desean asegurar el bienestar
                  de sus hijos.
                </p>
                <a className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  ¿En qué consiste este derecho?
                </h2>
                <p className="leading-relaxed text-base">
                  Para entender el funcionamiento de este derecho hay que dejar
                  claro primeramente dos conceptos: Nuda propiedad y usufructo
                  vitalicio. Cuando la persona obtiene una propiedad, adquiere
                  lo llamado como pleno dominio, el cual está dividido, entre el
                  usufructo vitalicio y la nuda propiedad. Por lo tanto, en el
                  momento de acogerse a este derecho lo que se está vendiendo
                  únicamente es la nuda propiedad, manteniendo la persona
                  propietaria el usufructo de la vivienda en su totalidad. Hay
                  que matizar, que el obtener la nuda propiedad no proporciona
                  la posesión de la vivienda, al pertenecer el usufructo a la
                  otra persona, pero si se puede hacer uso y disfrute de la
                  propiedad hasta que el usufructo llegue a su fin, pudiéndose
                  establecer un término fijo o un usufructo vitalicio concreto
                  hasta que el usufructuario fallezca. Y es en ese momento,
                  cuando el nudo propietario puede disponer de la totalidad de
                  la vivienda.
                </p>
                <a className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  ¿Ventajas de la nuda propiedad?
                </h2>
                <p className="leading-relaxed text-base">
                  La ventaja principal de este derecho es que se puede seguir
                  disfrutando de la vivienda de por vida. Con una seguridad
                  garantizada de manera legal, con todas las garantías, con el
                  correcto registro y una escritura ante notario. Otra ventaja,
                  es que el dinero de la venta se recibe en el momento que se
                  cede la nuda propiedad y en su totalidad, lo que permite al
                  usufructuario estar en su propiedad recibiendo dicha
                  compensación económica. Además, otra de las ventajas es que si
                  el usufructuario prefiere alquilar la vivienda y no vivir en
                  ella, podrá hacerlo recibiendo de manera íntegra la renta.
                  Teniendo en cuenta, que el alquiler acaba en el instante en
                  que fallece el usufructuario. A su vez, el usufructuario puede
                  vender el usufructo a una tercera persona y obtener otro
                  ingreso. Y por último, gracias a la nuda propiedad los gastos
                  pueden ser compartidos, es decir, con la venta, los gastos
                  disminuyen para el vendedor ya que este solo paga los de
                  consumo de la vivienda, es decir, agua, gas, etc. Y es el
                  inversor, quien se responsabilizaría del IBI y otros gastos
                  excepcionales de la vivienda. Solicite más información sin
                  compromiso
                </p>
                <a className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
      </section>

      <FormServices />
    </main>
  );
};

export default NudaProp;
