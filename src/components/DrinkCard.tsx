import { Drink } from "../types";

type DrinkCardProps = {
    drink: Drink
}

const DrinkCard = ({drink} :DrinkCardProps) => {
  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
<img src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`} className="hover:scale-125 transition-transform hover:rotate-2"/>

      </div>
<div className="p-5">
  <h2 className="text-2xl truncate font-black ">{drink.strDrink}</h2>

</div>
    
    </div>
  )
}

export default DrinkCard
