import { db } from "@/lib/db"
import { Recipe } from "@prisma/client"



export const getRecipes = async (id:string): Promise<Recipe[]> => {
    
    try {
        const recipes = await db.recipe.findMany({
            where:{
                userId: id
            }
        })
    
        return recipes
    } catch (error) {
        console.log(error)
        return []
    }
}