import { db } from "@/lib/db"
import { Recipe } from "@prisma/client"

type Recipes = {
    title:string;
    ingredients:string;
    servings:string;
    instructions:string;
}

export const getRecipes = async (userEmail:string): Promise<Recipes[]> => {
    

    try {
        const user = await db.user.findUnique({
            where:{
                email:userEmail
            }
        })
    
    
        const recipes = await db.recipe.findMany({
            where:{
                userId: user?.id
            }
        })
    
        return recipes
    } catch (error) {
        console.log(error)
        return []
    }
}