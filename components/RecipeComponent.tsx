"use client"

import { useStore } from '@/hooks/use-hook'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Separator } from './ui/separator'

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

  if(foodRecipes.length === 0){
    return null
  }

  return (

    
  
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



  {
    foodRecipes.map((recipe) => ( 
      <Dialog key={recipe}>
      <div className='mb-2'>
        <DialogTrigger className=''>{truncateText(recipe.title,20)}</DialogTrigger>
        
  <DialogContent className='bg-paper text-black overflow-y-auto h-full'>
    <DialogHeader>
      <DialogTitle className='text-black'>{recipe.title}</DialogTitle>
      <Separator className='bg-black opacity-30'/>
      <span className='text-muted-foreground text-sm font-bold'>Ingredients:</span>
      <DialogDescription>
        {
         recipe.ingredients
        }
         <Separator className='bg-black opacity-30'/>
      </DialogDescription>
      <span className='text-muted-foreground text-sm font-bold'>Servings:</span>
      <DialogDescription>
        {
         recipe.servings
        }
         <Separator className='bg-black opacity-30'/>
      </DialogDescription>
      <span className='text-muted-foreground text-sm font-bold'>Instructions:</span>
      <DialogDescription className='overflow-y-auto h-full'>
        {
         recipe.instructions
        }
         <Separator className='bg-black opacity-30'/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
  <Separator className='bg-black opacity-30'/>
      </div>
      </Dialog>
    ))
    
  }
  



</div>
  )
}

export default RecipeComponent