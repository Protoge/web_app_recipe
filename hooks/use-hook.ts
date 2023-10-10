import { create, } from "zustand";



type Recipe = {
    length: number;
    title: string;
    ingredients: string;
    servings: string;
    instructions: string;
  };

type Store = {
    nutritions: NutritionTypes;
    recipes: Recipe[] | [];
    setNutritions: (newItem: NutritionTypes) => void;
    setRecipes: (newItem:Recipe) => void;
    clearNutritions: () => void;
    clearRecipes:() => void;
}

export const useStore = create<Store>((set,get) => ({
    recipes:[],
    nutritions:{
        calories:0,
        carbohydrates_total_g:0,
        cholesterol_mg:0,
        fat_saturated_g:0,
        fat_total_g:0,
        fiber_g:0,
        name:"",
        potassium_mg:0,
        protein_g:0,
        serving_size_g:0,
        sodium_mg:0,
        sugar_g:0
    },
    setNutritions:(nutrition) => set((state: any) => ({nutritions:nutrition})),
    setRecipes:(recipe) => set((state:any) =>({recipes:[...state.recipes, recipe]})),
    clearNutritions: () => set({nutritions:{
        calories:0,
        carbohydrates_total_g:0,
        cholesterol_mg:0,
        fat_saturated_g:0,
        fat_total_g:0,
        fiber_g:0,
        name:"",
        potassium_mg:0,
        protein_g:0,
        serving_size_g:0,
        sodium_mg:0,
        sugar_g:0
    }}),
    clearRecipes: () => set({recipes:[]})
}))
