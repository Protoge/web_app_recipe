"use client"

import { useStore } from '@/hooks/use-hook'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Separator } from './ui/separator'
import { motion , AnimatePresence} from 'framer-motion'

const RecipeComponent = () => {

  const {recipes} = useStore()

  const foodRecipes = recipes[0] || []

  console.log(foodRecipes)

  function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...';
    } else {
      return text;
    }
  }

  let currentItem = 0

  console.log(foodRecipes)

  // hide 
  // if(foodRecipes.length === 0){
  //   return null
  // }

  const recipeVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Adjust the duration as needed
  };

  return (

    <AnimatePresence>

<motion.div
      
      variants={recipeVariants}
      initial="hidden"
      animate="visible"
      exit={{ x: "100%", opacity: 0, transition: { duration: 1 } }} // Custom exit animation
    >
  
    <div className='p-4 bg-paper border border-gray-300 shadow-lg rounded-lg text-black opacity-75 hover:opacity-100'>
      {/* <Accordion type="single" collapsible className=''    >
       {
        foodRecipes.length !== 0 && foodRecipes.map(recipe => (
          <AccordionItem value={`item-${currentItem += 1}`} key={recipe}>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        )) 
          
        
       }
      </Accordion> */}



    <h1 className='font-bold text-center'>Recipes</h1>
  {foodRecipes.length === 0 ? "No recipe listed"  :
    foodRecipes.map((recipe) => ( 
      <motion.div
      key={recipe.title}
      variants={recipeVariants}
      initial="hidden"
      animate="visible"
      exit={{ x: 0, opacity: 0, transition: { duration: 0.5 } }} // Custom exit animation
    >
     
      <Dialog key={recipe}>
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
          {recipe.title}
          </motion.p>
        
        </DialogTitle>
      <Separator className='bg-black opacity-30'/>
      <span className='text-muted-foreground text-sm font-bold'>Ingredients:</span>
      <DialogDescription>
      <motion.p key={recipe.title}
      variants={recipeVariants}
      initial="hidden"
      animate="visible"
      exit={{ x: 0, opacity: 0, transition: { duration: 0.5 } }} >
        {
         recipe.ingredients
        }
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
        {
         recipe.instructions
        }
        </motion.p>
         <Separator className='bg-black opacity-30'/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
  <Separator className='bg-black opacity-30'/>
      </div>
      </Dialog>
      </motion.div>
      
    ))
    
  }
 



</div>
</motion.div>
</AnimatePresence>
  )
}

export default RecipeComponent