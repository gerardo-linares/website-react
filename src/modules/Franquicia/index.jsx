import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";

const Franquicia = () => {
  return (
    <main>
      <HeroService
        image={"./franquicia.jpg"}
        alt={"tree of houses image"}
        title={"Franquicias Red Valore"}
        description={"Expande tu Negocio Inmobiliario con Nosotros"}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <p className="leading-relaxed text-lg">
              Únete a <span className="text-primary">Red Valore</span> y expande
              tu negocio inmobiliario. Te brindamos experiencia, respaldo y una
              marca reconocida en el mercado. Nuestro modelo de negocio probado
              te asegura oportunidades de éxito, con una amplia gama de
              servicios para ofrecer a tus clientes. Contáctanos para obtener
              más información y formar parte de nuestra red de franquicias
              inmobiliarias. ¡Te esperamos!
            </p>
            <span className="inline-block h-1 w-10 rounded bg-primary mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              Red Valore
            </h2>
            <p className="text-primary font-slogan">Trate con Profesionales</p>
          </div>
        </div>
      </section>

      <FormServices />
    </main>
  );
};

export default Franquicia;
