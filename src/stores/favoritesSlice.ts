import { StateCreator } from 'zustand'
import { Recipe } from '../types'

export type FavoritesSliceType = {
    favorites: Recipe[]
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = () => ({
  favorites: [],
//   addFavorite: (recipe: Recipe) => set((state) => ({ favorites: [...state.favorites, recipe] })),
//   removeFavorite: (recipe: Recipe) => set((state) => ({ favorites: state.favorites.filter((f) => f.idDrink !== recipe.idDrink) })),
})


//El dividir los slices  se le conoce como "Slice pattern"