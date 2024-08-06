
import React from 'react'
import { useMemo } from 'react'
import { useAppStore } from '../stores/useAppStore'
import DrinkCard from '../components/DrinkCard'

export const FavoritesPage = () => {

const favorites = useAppStore((state) => state.favorites)
const hasFavorites = useMemo(() => favorites.length, [favorites])


  return (
<>
<h1 className='text-6xl font-extrabold' > Favoritos</h1>

{/* <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-10  mx-10  gap-10 md:gap-20"> */}

{
  hasFavorites ? (
    <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-10  mx-10  gap-10 md:gap-20">
  {favorites.map((drink) => (
    <DrinkCard key={drink.idDrink} drink={
      drink}/>
  ))}
</div>
  ) : (

    <p className='my-10 text-center text-2xl'> Los favoritos se mostrarán aquí</p>
  )
}
</>
  )
}

export default FavoritesPage