import { create, } from "zustand";

type Nutrition = {
    calories: number;
    carbohydrates_total_g: number;
    cholesterol_mg: number;
    fat_saturated_g: number;
    fat_total_g: number;
    fiber_g: number;
    name: string;
    potassium_mg: number;
    protein_g: number;
    serving_size_g: number;
    sodium_mg: number;
    sugar_g: number;
}

type Recipe = {
    length: number;
    map(arg0: (recipe: any) => {}): import("react").ReactNode;
    title: string;
    ingredients: string;
    servings: string;
    instructions: string;
  };

type Store = {
    nutritions: Nutrition[] | [];
    recipes: Recipe[] | [];
    setNutritions: (newItem: Nutrition) => void;
    setRecipes: (newItem:Recipe) => void;
    clearNutritions: () => void;
    clearRecipes:() => void;
}

export const useStore = create<Store>((set,get) => ({
    recipes:[],
    nutritions:[],
    setNutritions:(nutrition) => set((state: any) => ({nutritions:[...state.nutritions, nutrition]})),
    setRecipes:(recipe) => set((state:any) =>({recipes:[...state.recipes, recipe]})),
    clearNutritions: () => set({nutritions:[]}),
    clearRecipes: () => set({recipes:[]})
}))
