import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (
      get().favorites.some((favorite) => favorite.idDrink === recipe.idDrink)
    ) {
      set((state) => ({
        favorites: state.favorites.filter((f) => f.idDrink !== recipe.idDrink),
      }))
    } else {
      "no existe en favoritos";
    
      set((state)=> ({
        favorites: [...state.favorites, recipe],
      }))
    
    
    }
  },

  //   addFavorite: (recipe: Recipe) => set((state) => ({ favorites: [...state.favorites, recipe] })),
  //   removeFavorite: (recipe: Recipe) => set((state) => ({ favorites: state.favorites.filter((f) => f.idDrink !== recipe.idDrink) })),
});

//El dividir los slices  se le conoce como el patrón:  "Slice pattern" permite tener codigo más organizado
