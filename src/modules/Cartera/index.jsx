import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";

const Cartera = () => {
  const phoneNumber = "+34687032601";
  return (
    <main>
      <HeroService
        image={"./cartera.webp"}
        alt={"laptop with digital houses"}
        title={"Cartera Propia"}
        description={
          "Una Base de datos y cartera de clientes propia, ambas en constante actualización"
        }
      />
      <section>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col-reverse gap-5 items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                En <span className="text-primary font-bold">Red Valore</span>,
                sabemos lo importante que es para ti encontrar el hogar perfecto
                o la propiedad de inversión ideal.
                <br className="hidden lg:inline-block" />
              </h1>
              <p class="mb-8 leading-relaxed">
                Es por eso que hemos desarrollado nuestra Cartera Propia, una
                herramienta exclusiva que te brinda acceso a una base de datos
                de clientes potenciales actualizada constantemente. Nuestra
                Cartera Propia está diseñada específicamente para compradores de
                inmuebles como tú. Te proporcionamos información precisa y
                relevante sobre propiedades disponibles en el mercado, así como
                datos detallados sobre los clientes interesados en comprar o
                alquilar.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./mostoles12.jpg"
              />
            </div>
          </div>
        </section>

        <article className="text-gray-600 body-font">
          <div className="container mx-auto flex px-10 pb-14 md:flex-row flex-col gap-5 items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./cartera2.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Al aprovechar nuestra Cartera Propia, podrás:
              </h1>
              <p className="mb-8 leading-relaxed">
                <span className="text-primary font-bold">1</span> Descubrir
                oportunidades: Accede a una amplia selección de propiedades que
                se ajusten a tus necesidades y preferencias. Encuentra
                oportunidades de compra en ubicaciones deseadas y en rangos de
                precios que se adapten a tu presupuesto.
                <br />
                <span className="text-primary font-bold">2</span> Obtener
                información actualizada: Nuestra base de datos se actualiza
                constantemente, brindándote acceso a las últimas propiedades
                disponibles en el mercado. No te pierdas ninguna oportunidad y
                mantente al tanto de las novedades inmobiliarias. <br />
                <span className="text-primary font-bold">3</span> Ahorrar tiempo
                y esfuerzo: Al contar con una Cartera Propia, evitarás la
                búsqueda exhaustiva de propiedades en múltiples plataformas.
                Centralizamos la información para que puedas encontrar lo que
                buscas de manera más eficiente y sin perder tiempo. <br />
                <span className="text-primary font-bold">4</span> Recibir
                asesoramiento personalizado: Nuestro equipo de expertos está
                listo para ayudarte en cada paso del proceso de compra. Te
                brindaremos asesoramiento personalizado y te guiaremos en la
                toma de decisiones, garantizando que encuentres la propiedad
                adecuada para ti.
              </p>
              <div className="flex justify-center">
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg"
                >
                  Quiero Acceder
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="container mx-auto text-center px-5">
          En <span className="text-secondary font-semibold">Red Valore</span>,
          nos comprometemos a proporcionarte una experiencia inmobiliaria
          excepcional. Nuestra Cartera Propia está diseñada pensando en ti, para
          facilitar tu búsqueda y hacer que el proceso de compra de tu nuevo
          hogar sea lo más fluido posible. Descubre cómo nuestra Cartera Propia
          puede ayudarte a encontrar la propiedad de tus sueños. Contáctanos hoy
          mismo para obtener más información y comenzar tu búsqueda de manera
          efectiva.{" "}
          <span className="text-secondary font-semibold">
            ¡Estamos aquí para ayudarte a encontrar tu próximo hogar!
          </span>
        </article>
      </section>

      <FormServices />
    </main>
  );
};

export default Cartera;
