
import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Drinks } from '../types/index';


export default function IndexPage() {

  const drinks =  useAppStore((state) => state.drinks)

const hasDrinks = useMemo(() =>  drinks.drinks.length ,  [drinks])


  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasDrinks ? (
        <>   <p>  Si hay bebidas    </p>
        </>)
        : (
          <>   <p className="my-10 text-center text-2xl">  No hay resultados aun, utiliza el formulario para buscar recetas    </p>
          </>
        )}
    </>
  );
}
