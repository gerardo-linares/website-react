import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";

const Franquicia = () => {
  return (
    <main>
      <HeroService
        image={"./franquicia.jpg"}
        title={"Franquicias Red Valore"}
        description={"Expande tu Negocio Inmobiliario con Nosotros"}
      />
      <h1>
        En Red Valore, estamos emocionados de ofrecerte la oportunidad de formar
        parte de nuestra red de franquicias inmobiliarias. Ya sea que desees
        expandir tu negocio existente o comenzar tu propia empresa inmobiliaria,
        nuestras franquicias te brindan un camino hacia el éxito y la
        rentabilidad. ¿Por qué elegir una franquicia de Red Valore? Experiencia
        y respaldo: Como parte de nuestra franquicia, tendrás acceso a nuestro
        conocimiento y experiencia en el sector inmobiliario. Te
        proporcionaremos la capacitación, el apoyo y las herramientas necesarias
        para establecer y hacer crecer tu negocio de manera efectiva. Marca
        reconocida: Red Valore es una marca consolidada y reconocida en el
        mercado inmobiliario. Al unirte a nuestra franquicia, podrás aprovechar
        el prestigio y la reputación de nuestra marca, lo que te ayudará a
        atraer clientes y generar confianza en tu área de operaciones. Modelo de
        negocio probado: Nuestro modelo de negocio ha sido desarrollado y
        perfeccionado a lo largo de los años. Te proporcionaremos un plan de
        negocio sólido y estrategias probadas para maximizar tus oportunidades
        de éxito. Además, contarás con el respaldo de nuestro equipo de expertos
        para guiarte en cada paso del camino. Amplia gama de servicios: Como
        franquiciado de Red Valore, tendrás la oportunidad de ofrecer una amplia
        gama de servicios inmobiliarios a tus clientes. Esto incluye la compra,
        venta y alquiler de propiedades, asesoramiento financiero, gestión de
        inversiones y más. Podrás adaptar tus servicios según las necesidades de
        tu mercado local. ¿Cómo puedes obtener más información? Estamos
        encantados de brindarte más detalles sobre nuestras franquicias y cómo
        puedes unirte a nuestra red. Para obtener más información, no dudes en
        ponerte en contacto con nosotros
      </h1>
      <FormServices />
    </main>
  );
};

export default Franquicia;
