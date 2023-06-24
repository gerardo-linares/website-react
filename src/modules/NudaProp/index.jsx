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
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-secondary mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="red"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
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
                <p className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-secondary mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="red"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
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
                <p className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10  items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-secondary mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="red"
                >
                  <path d="M148 76.6C148 34.3 182.3 0 224.6 0c20.3 0 39.8 8.1 54.1 22.4l9.3 9.3 9.3-9.3C311.6 8.1 331.1 0 351.4 0C393.7 0 428 34.3 428 76.6c0 20.3-8.1 39.8-22.4 54.1L302.1 234.1c-7.8 7.8-20.5 7.8-28.3 0L170.4 130.7C156.1 116.4 148 96.9 148 76.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
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
                <p className="mt-3 text-primary inline-flex items-center">
                  Solicita más info
                </p>
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
