import React from "react";
import HeroService from "../../components/HeroServices";
import FormServices from "../../components/FormServices";

const NudaProp = () => {
  return (
    <div>
      <HeroService image={"./nudaprop.webp"} />
      NudaProp
      <FormServices />
    </div>
  );
};

export default NudaProp;
