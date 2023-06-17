import React from "react";
import Logo from "../../assets/logo.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { useState } from "react";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="text-red-600 bg-white border-b-2 shadow-lg body-font  w-full ">
      <div className="container flex m-auto justify-between py-2 items-center px-5">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="h-[80px]" src={Logo} alt="Logotype" />
        </a>

        <nav
          className={
            openMenu
              ? " absolute flex flex-col right-0 top-[80px] h-[400px] gap-10 px-8 justify-center text-center rounded-b-3xl shadow-xl bg-white w-screen text-2xl m-auto "
              : " hidden md:flex md:gap-12 md:flex-row md:justify-between md:text-center md:static md:right-auto md:top-auto md:h-auto md:shadow-none "
          }
          onClick={() => setOpenMenu(false)}
        >
          <a className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer active">
            Inicio
          </a>
          <a className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer ">
            Servicios
          </a>
          <a className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer ">
            Nosotros
          </a>
          <a className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer ">
            Contacto
          </a>
        </nav>
        <button className=" hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Chat en linea
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>

        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <RiCloseFill className="text-red-600" />
          ) : (
            <RiMenu3Fill className="text-red-600" />
          )}{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
