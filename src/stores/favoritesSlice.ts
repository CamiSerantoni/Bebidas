
import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { createNotificationsSlice, NotificationSliceType } from "./notificationsSlice";


export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe['idDrink']) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType > = (
  set,
  get, api
) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter((f) => f.idDrink !== recipe.idDrink),
      }))
      createNotificationsSlice(set, get, api).showNotification({
                    text: 'Se eliminó de favoritos', 
                    error: false
                  })
    } else {
      "no existe en favoritos";
    
      set((state)=> ({
        favorites: [...state.favorites, recipe],
      }))
      createNotificationsSlice(set, get, api).showNotification({
        text: 'Se agregó a favoritos', 
        error: false
      })
    
    }
    createRecipesSlice(set, get, api).closeModal()
    localStorage.setItem('favorites', JSON.stringify(get().favorites))
  },
  favoriteExists: (id) => {
    return  get().favorites.some((favorite) => favorite.idDrink === id)
  }, 
  loadFromStorage: () => {
  const storedFavorites = localStorage.getItem('favorites')
  if(storedFavorites){
    set({favorites: JSON.parse(storedFavorites)})
  }
  }

  //   addFavorite: (recipe: Recipe) => set((state) => ({ favorites: [...state.favorites, recipe] })),
  //   removeFavorite: (recipe: Recipe) => set((state) => ({ favorites: state.favorites.filter((f) => f.idDrink !== recipe.idDrink) })),
});

//El dividir los slices  se le conoce como el patrón:  "Slice pattern" permite tener codigo más organizado
