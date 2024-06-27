import { Drink } from "../types";

type DrinkCardProps = {
    drink: Drink
}

const DrinkCard = ({drink} :DrinkCardProps) => {
  return (
    <div className="border shadow-lg">
      <div>
<img src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`} />

      </div>

      <h2>{drink.strDrink}</h2>
    </div>
  )
}

export default DrinkCard
