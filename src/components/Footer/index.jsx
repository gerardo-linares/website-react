import React from "react";
import {
  HiOutlineGlobeEuropeAfrica,
  HiOutlineDevicePhoneMobile,
  HiOutlineMap,
  HiOutlineClock,
} from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2">
      <div className="container px-5 py-24 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Red Valore</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Red Inmobiliaria líder en Madrid
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 flex flex-col text-center md:text-left">
            LES OFRECEMOS
          </h2>
          <nav className="list-none flex flex-col gap-2 text-center md:text-left">
            <li>
              <a className="text-gray-600 hover:text-gray-800">
                Valoración Gratuita
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">
                Nuda propiedad
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">
                Digitalización de activos
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Viviendas VPO</a>
            </li>
          </nav>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-center md:text-left">
            TÉRMINOS DE USO
          </h2>
          <nav className="list-none flex flex-col gap-2 text-center md:text-left">
            <li>
              <a className="text-gray-600 hover:text-gray-800">
                {" "}
                Términos de uso
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Franquíciete</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">
                Política de privacidad
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">
                Trabaja con nosotros
              </a>
            </li>
          </nav>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-center md:text-left">
            MADRID, ESPAÑA
          </h2>
          <nav className="list-none flex flex-col gap-2 text-center md:text-left">
            <li className="flex items-center gap-2 justify-center md:justify-start ">
              <HiOutlineGlobeEuropeAfrica className="text-3xl" />
              <a className="text-gray-600 hover:text-gray-800 item ">
                direccion@redvalore.es
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <HiOutlineDevicePhoneMobile className="text-3xl" />
              <a className="text-gray-600 hover:text-gray-800">
                656270067 / 917234697
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <HiOutlineMap className="text-3xl" />
              <a className="text-gray-600 hover:text-gray-800">
                Calle aviador zorita 7 , Madrid CP:28020
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <HiOutlineClock className="text-3xl" />
              <a className="text-gray-600 hover:text-gray-800">
                Lunes a viernes 10 a 14hs y 17 a 20hs
              </a>
            </li>
          </nav>
        </div>
      </div>
      <div className="bg-gray-100 h-[80px] flex items-center">
        <div className="container mx-auto py- px-5 flex flex-wrap flex-col sm:flex-row items-center ">
          <p className="text-gray-500 text-center sm:text-left">
            © 2023 GLinares —
            <a
              href="https://gerardolinares.com.ar/"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @GLinares
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-4">
            <a className="text-red-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-red-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-red-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-red-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
