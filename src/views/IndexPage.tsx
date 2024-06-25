
import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Drinks } from '../types/index';
import DrinkCard from "../components/DrinkCard";


export default function IndexPage() {

  const drinks =  useAppStore((state) => state.drinks)

const hasDrinks = useMemo(() =>  drinks.drinks.length ,  [drinks])


  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasDrinks ? (
        <>  
{drinks.drinks.map ((drink) => (
  <DrinkCard drink={drink} key={drink.idDrink} />
))}

        </>)
        : (
          <>   <p className="my-10 text-center text-2xl">  No hay resultados aun, utiliza el formulario para buscar recetas    </p>
          </>
        )}
    </>
  );
}
