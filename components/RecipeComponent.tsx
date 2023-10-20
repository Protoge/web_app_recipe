"use client"

import { useStore } from '@/hooks/use-hook'
import React from 'react'
import { motion , AnimatePresence} from 'framer-motion'
import IndividualRecipeComponent from './IndividualRecipeComponent'

const RecipeComponent = () => {

  const {recipes} = useStore()

  const foodRecipes = recipes[0] || []




  let currentItem = 0

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
    
      <>
        <IndividualRecipeComponent recipe={recipe}/>
      </>
      
    ))
    
  }
 



</div>
</motion.div>
</AnimatePresence>
  )
}

export default RecipeComponent