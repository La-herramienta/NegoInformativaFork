"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ItemMenu from "./ItemMenu";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import IconsMenu from "../components/IconsMenu";
import dynamic from "next/dynamic";

const ModalUbicacion = dynamic(() => import("../components/ModalUbicacion"), {
  ssr: false,
});
const MenuPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollBg, setScrollBg] = useState("");
  const [OpenModalSearch, setOpenModalSearch] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isElementVisible = window.scrollY > 40;

      if (isElementVisible) {
        setScrollBg("bg-black/50 backdrop-blur-md ");
      } else {
        setScrollBg("   lg:bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      {OpenModalSearch && (
        <ModalUbicacion
          setOpenModalSearch={setOpenModalSearch}
          OpenModalSearch={OpenModalSearch}
        />
      )}
      <nav
        style={{ filter: "drop-shadow(0px 0px 3px black)" }}
        className={`sticky z-50 top-0 p-2 md:px-10 shadow-sm md:flex md:items-center md:justify-between    ${scrollBg}  `}
      >
        <div className="flex justify-between items-center   ">
          {/* Escudo Logo "inicio" */}
          <Link className="flex" href="/" title="Ir a inicio">
            <Image
              src="/LogoNego.svg"
              width={130}
              height={60}
              alt="Logotype"
              className="object-contain"
            />
          </Link>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block text-white">
            <button name="Menu" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>{" "}
            </button>
          </span>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col "
        >
          <div
            className={` text-center  flex flex-col h-screen md:h-auto  md:flex md:flex-row  md:items-center md:justify-start  z-[-1] md:z-auto md:static gap-2 absolute text-white bg-black    md:bg-transparent  w-full left-0 top-full md:w-auto md:py-0  md:pl-0 pl-7 md:opacity-100 opacity-0 right-[-400px] transition-all ease-in   ${
              isOpen ? ` right-0 py-11 opacity-100` : `hidden`
            }`}
          >
            {/*  */}
            <ItemMenu
              ruta="/"
              setIsOpen={setIsOpen}
              border={pathname == "/" ? true : false}
            >
              Inicio
            </ItemMenu>

            <ItemMenu
              ruta="/Marcas"
              setIsOpen={setIsOpen}
              border={pathname == "/Marcas" ? true : false}
            >
              Marcas
            </ItemMenu>
            <ItemMenu
              ruta="/QuienesSomos"
              setIsOpen={setIsOpen}
              border={pathname == "/QuienesSomos" ? true : false}
            >
              Nosotros
            </ItemMenu>
            <ItemMenu
              ruta="/Contacto"
              setIsOpen={setIsOpen}
              border={pathname == "/Contacto" ? true : false}
            >
              Contacto
            </ItemMenu>

            {/* <div className="hidden lg:block">
              <NegoGarden />
            </div> */}
          </div>
        </motion.div>
        <IconsMenu setOpenModalSearch={setOpenModalSearch} />
      </nav>
    </>
  );
};

export default MenuPrincipal;
