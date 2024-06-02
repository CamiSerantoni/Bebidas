import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);
  /* Si queremos resaltar pagina actual usamos navLink sino solo link */

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover ': "bg-slate-800"}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />{" "}
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              {" "}
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              {" "}
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form  className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6 "  action="">
            <div>
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                {" "}
                Nombre o ingrediente
              </label>
              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o ingrediente. Ej. Vodka, Tequila, Café"
              />
            </div>
            <div>
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                {" "}
                Nombre o ingrediente
              </label>
              <select
                id="ingredient"
                
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                // placeholder="Nombre o ingrediente. Ej. Vodka, Tequila, Café"
              >  <option value="">--Seleccione--</option></select>
            </div>
            <input 
            type="submit"
            value="Buscar recetas" 
            className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white uppercase font-extrabold w-full p-3 rounded-lg"/>
          </form>
        )}
      </div>
    </header>
  );
}
