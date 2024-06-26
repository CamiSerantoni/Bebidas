import { Drink } from "../types";
import { useAppStore } from "../stores/useAppStore";

type DrinkCardProps = {
  drink: Drink;
};

const DrinkCard = ({ drink }: DrinkCardProps) => {

const selectRecipe = useAppStore((state) => state.selectRecipe)

  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
          className="hover:scale-125 transition-transform hover:rotate-2"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black ">{drink.strDrink}</h2>
        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 text-white mt-5 w-full font-bold text-lg p-3 rounded"
          onClick={() => selectRecipe(drink.idDrink)}
        >
          Ver receta
        </button>
      </div>
    </div>
  );
};

export default DrinkCard;
