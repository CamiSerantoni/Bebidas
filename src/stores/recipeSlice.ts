import { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import type { Categories, Drinks, SearchFilter } from "../types";

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}



export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },

    drinks : {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()

        // console.log(categories, 'DESDE SLICE')
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
       const drinks =        await getRecipes(filters)
       set({
           drinks
       })
    }, 
    selectRecipe: async (id) => {
        console.log('DESDEEEEEE  SLICE  Seleccionar receta', id)
    }


});