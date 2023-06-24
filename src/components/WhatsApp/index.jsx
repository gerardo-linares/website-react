import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "+34687032601"; // Número de teléfono con el formato adecuado

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full w-16 h-16 flex justify-center items-center cursor-pointer animate-pulse hover:scale-105 transition-all duration-200"
    >
      <FaWhatsapp className="text-5xl" />
    </a>
  );
};

export default WhatsApp;
