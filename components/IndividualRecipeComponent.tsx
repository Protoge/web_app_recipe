"use client"
import {motion} from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Separator } from './ui/separator'
import IngredientsComponent from './IngredientsComponent'
import { Recipe } from '@prisma/client'
import { Button } from './ui/button'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

interface IndividualRecipeComponent{
    recipe:Recipe
}

const IndividualRecipeComponent = ({recipe}:IndividualRecipeComponent) => {

    const {data,status} = useSession()

    function truncateText(text: string, maxLength: number) {
        if (text.length > maxLength) {
          return text.substring(0, maxLength - 3) + '...';
        } else {
          return text;
        }
      }

      const recipeVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Adjust the duration as needed
      };

      const dataRecipe = {
        title:recipe.title,
        ingredients:recipe.ingredients,
        servings: recipe.servings,
        instructions: recipe.instructions
      }

      
    const saveRecipeToDB = async () => {
        try{
        await axios.post(`/api/save-recipe/${data?.user.id}`,dataRecipe)

        toast.success("Recipe saved")
        }catch(error){
        console.log(error)
        toast.error("Something went wrong")
        }
    }

  return (
    <motion.div
    key={recipe.title}
    variants={recipeVariants}
    initial="hidden"
    animate="visible"
    exit={{ x: 0, opacity: 0, transition: { duration: 0.5 } }} // Custom exit animation
  >
   
    <Dialog>
    <div className='mb-2'>
      <DialogTrigger className=''>{truncateText(recipe.title,20)}</DialogTrigger>
      
<DialogContent className='bg-paper text-black overflow-y-auto h-full'>
  <DialogHeader>
    
    <DialogTitle className='text-black'>
        
        <motion.p key={recipe.title}
    variants={recipeVariants}
    initial="hidden"
    animate="visible"
    exit={{ x: 0, opacity: 0, transition: { duration: 0.5 } }} >
        {recipe.title} {
          status == "authenticated" && (<Button onClick={() => saveRecipeToDB()}>Save recipe</Button>)
        }
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
<Separator className='bg-black opacity-30'/>
    </div>
    </Dialog>
    </motion.div>
  )
}

export default IndividualRecipeComponent