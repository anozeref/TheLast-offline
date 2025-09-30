import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(prev => !prev);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-3">
      <div className="max-padd-container flexBetween">
        {/* LOGO */}
        <div className="flex flex-1">
          <a href="/" className="flex items-end">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwKzronCcI2N2oEcPqvMt_sEayEmPqKu05g&s" alt="logo" className="h-12" />
            <div>
              <span className="hidden sm:block font-extrabold text-3xl relative top-1 left-1">Aink</span>
              <span className="hidden sm:block font-extrabold text-xs relative left-1.5 tracking-[10px] uppercase text-solid">Cafe</span>
            </div>
          </a>
        </div>

        {/* Navbar */}
        <div className="flexCenter flex-1">
          <Navbar
            setMenuOpened={setMenuOpened}
            containerStyles={`${menuOpened
              ? "flex item-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md rounded-lg"
              : "hidden lg:flex gap-x-5 xl:gap-x-10 medium-15 p-1"
              }`}
          />
        </div>

        {/* Button & profile */}
        <div className="flex flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
          {/* Menu toggle */}
          <div className="relative lg:hidden w-7 h-6">
            <img
              onClick={toggleMenu}
              src=""
              alt=""
              className={`${'absolute'} duration-700 ${menuOpened ? "opacity-0" : "opacity-100"}`}
            />
            <img
              onClick={toggleMenu}
              src=""
              alt=""
              className={`${'absolute'} duration-700 ${menuOpened ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <img
              src=""
              alt=""
              className="min-w-11 bg-white rounded-full p-2"
            />
            <label className="absolute bottom-10 right-1 text-xs font-bold bg-solid text-white flexCenter rounded-full w-9">0</label>
          </div>

          {/* User Profile */}
          <div className="">
            <button className="btn-solid flexCenter gap-2">
              Login
              <img
                src=""
                alt=""
                className="invert w-5"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
