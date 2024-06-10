import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";


export default function Header() {

const [searchFilters , setSearchFilters] = useState({
  ingredient: '',
  category: ''

})
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);


  const fetchCategories =  useAppStore((state) => state.fetchCategories )
  const categories =  useAppStore((state) => state.categories )
  console.log(categories, 'DESDE HEADER')


useEffect(()=> {
  fetchCategories();
},[])

const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
  setSearchFilters({
    ...searchFilters,
    [event.target.name]: event.target.value
  })
}


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(searchFilters);

  if (Object.values(searchFilters).includes('')) {
    console.log('Todos los campos son obligatorios');
    return
  }
  // Aquí puedes realizar la solicitud con la API o realizar otras acciones con los filtros 

  /* Si queremos resaltar pagina actual usamos navLink sino solo link */
}
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
          <form  className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6 "  onSubmit={handleSubmit}>
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
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                {" "}
                Nombre o ingrediente
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
                onChange={handleChange}
                value={searchFilters.ingredient}
              >  <option value="">--Seleccione--</option>
              
              {categories.drinks.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
              
              </select>
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
