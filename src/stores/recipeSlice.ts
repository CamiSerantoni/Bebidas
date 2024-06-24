import { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import type { Categories, SearchFilter } from "../types";

export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}



export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
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
       console.log(drinks, 'DESDE SLICE')
    }


});