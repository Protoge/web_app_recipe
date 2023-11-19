"use client"
import { getRecipes } from "@/actions/getRecipes"
import { NavigationMenuContent } from "./ui/navigation-menu"
import { getAuthSession } from "@/lib/auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { Recipe } from "@prisma/client"
import {motion} from "framer-motion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import IngredientsComponent from "./IngredientsComponent"
import { Separator } from "./ui/separator"

interface SaveRecipesListProps {
    recipes:Recipe[]
}


const SaveRecipesList =   ({recipes}:SaveRecipesListProps) => {

    const recipeVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Adjust the duration as needed
      };

    return (
        <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[250px]">
            {
                recipes.map((recipe) => (
                    <Dialog key={recipe.id}>
                        <DialogTrigger>    
                            <li className="text-sm text-start hover:underline">{recipe?.title}</li>
                        </DialogTrigger>
                        <DialogContent className='bg-paper text-black overflow-y-auto h-full'>
                            <DialogHeader>
                                
                                <DialogTitle className='text-black'>
                                    
                                    <motion.p key={recipe.title}
                                        variants={recipeVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit={{ x: 0, opacity: 0, transition: { duration: 0.5 } }} 
                                    >
                                    {recipe.title}
                                    </motion.p>
                                
                                </DialogTitle>
                                <Separator className='bg-black opacity-30'/>
                                <span className='text-muted-foreground text-sm font-bold'>Ingredients:</span>
                                <DialogDescription>
                                <motion.p 
                                
                                key={recipe.title}
                                variants={recipeVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ x: 0, opacity: 0, transition: { duration: 0.5 } }} >
                                <p className='leading-loose'>
                                    <IngredientsComponent ingredients={recipe.ingredients}/>
                                
                                </p>
                                </motion.p>
                                <Separator className='bg-black opacity-30'/>
                                </DialogDescription>
                                <span className='text-muted-foreground text-sm font-bold'>Servings:</span>
                                <DialogDescription>
                                <motion.p key={recipe.title}
                                variants={recipeVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ x: 0, opacity: 0, transition: { duration: 0.5 } }} >
                                {
                                recipe.servings
                                }
                                </motion.p>
                                <Separator className='bg-black opacity-30'/>
                                </DialogDescription>
                                <span className='text-muted-foreground text-sm font-bold'>Instructions:</span>
                                <DialogDescription className='overflow-y-auto h-full'>
                                <motion.p key={recipe.title}
                                variants={recipeVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ x: 0, opacity: 0, transition: { duration: 0.5 } }} >
                                <p className='leading-loose'>
                                {
                                recipe.instructions
                                }
                                </p>
                                </motion.p>
                                <Separator className='bg-black opacity-30'/>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    
                ))
            }
            </ul>
            
        </NavigationMenuContent>
    )
}

export default SaveRecipesList