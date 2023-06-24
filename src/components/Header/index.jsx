import React from "react";
import Logo from "../../assets/logo.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const phoneNumber = "+34687032601";
  const isHome = location.pathname === "/";

  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <header className="text-primary bg-white border-b-2 body-font fixed w-full z-30 ">
      <div className="container flex m-auto justify-between py-2 items-center px-5 ">
        <RouterLink
          to="/"
          className="flex title-font font-medium items-center text-gray-900  md:mb-0 cursor-pointer"
        >
          <img className="h-[70px]" src={Logo} alt="Logotype" />
        </RouterLink>

        <nav
          className={
            openMenu
              ? " absolute flex flex-col right-0 top-[80px] h-[400px] gap-10 px-8 justify-center text-center rounded-b-3xl shadow-xl bg-white w-full text-2xl m-auto opacity-90 "
              : " hidden md:flex md:gap-5 xl:gap-12 md:flex-row md:justify-between md:text-center md:static md:right-auto md:top-auto md:h-auto md:shadow-none "
          }
          onClick={() => setOpenMenu(false)}
        >
          {isHome ? (
            <>
              <Link
                to="Inicio"
                smooth={true}
                duration={500}
                className="p-4 border-b-2 border-primary border-opacity-0 hover:border-opacity-100 hover:text-secondary duration-200 cursor-pointer active"
                onClick={handleLinkClick}
              >
                Inicio
              </Link>
              <Link
                to="Servicios"
                smooth={true}
                duration={500}
                className="p-4 border-b-2 border-primary border-opacity-0 hover:border-opacity-100 hover:text-secondary duration-200 cursor-pointer "
                onClick={handleLinkClick}
              >
                Servicios
              </Link>
              <Link
                to="Nosotros"
                smooth={true}
                duration={500}
                className="p-4 border-b-2 border-primary border-opacity-0 hover:border-opacity-100 hover:text-secondary duration-200 cursor-pointer "
                onClick={handleLinkClick}
              >
                Nosotros
              </Link>
              <Link
                to="Contacto"
                smooth={true}
                duration={500}
                className="p-4 border-b-2 border-primary border-opacity-0 hover:border-opacity-100 hover:text-secondary duration-200 cursor-pointer "
                onClick={handleLinkClick}
              >
                Contacto
              </Link>
            </>
          ) : (
            <>
              <RouterLink
                to="/"
                className="p-4 hover:text-secondary duration-200 cursor-pointer"
                onClick={handleLinkClick}
              >
                Inicio
              </RouterLink>
              <RouterLink
                to="/"
                className="p-4 hover:text-secondary duration-200 cursor-pointer"
                onClick={handleLinkClick}
              >
                Servicios
              </RouterLink>
              <RouterLink
                to="/"
                className="p-4 hover:text-secondary duration-200 cursor-pointer"
                onClick={handleLinkClick}
              >
                Nosotros
              </RouterLink>
              <RouterLink
                to="/"
                className="p-4 hover:text-secondary duration-200 cursor-pointer"
                onClick={handleLinkClick}
              >
                Contacto
              </RouterLink>
            </>
          )}
        </nav>
        <a
          className=" hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3  hover:bg-gray-200 rounded text-base  hover:scale-105 transition-all duration-200"
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </a>

        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <RiCloseFill className="text-primary" />
          ) : (
            <RiMenu3Fill className="text-primary" />
          )}{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
