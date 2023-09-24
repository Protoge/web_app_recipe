"use client"
import { useStore } from '@/hooks/use-hook'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'

const NutritionalComponent = () => {
  
  const {clearRecipes} = useStore()

  const {nutritions} = useStore()

  if(nutritions[0] === undefined){
    return null
  }

  

  return (
    <div className='opacity-75 hover:opacity-100 transition duration-200 ease-in-out'>
      <Card className='border-2 border-green-800 rounded-lg '>
        <CardHeader>
          <CardTitle>
            Nutritional facts
          </CardTitle>
          <span className='text-muted-foreground text-xs'>Nutrition data is scaled to 100g</span>
          <Separator/>
        </CardHeader>
        <CardContent>
          <span><span className='font-bold'>Calories:</span> {nutritions[0] === undefined   ? "0" : nutritions[0].calories}</span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Total Fat:</span> {nutritions[0] === undefined  ? "0" : nutritions[0].fat_total_g}<span className='font-bold'>g</span></span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Cholestrol:</span> {nutritions[0] === undefined  ? "0" : nutritions[0].cholesterol_mg}<span className='font-bold'>mg</span></span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Sodium:</span> {nutritions[0] === undefined  ? "0" : nutritions[0].sodium_mg}<span className='font-bold'>mg</span></span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Total Carbs:</span> {nutritions[0] === undefined  ? "0" : nutritions[0].carbohydrates_total_g}<span className='font-bold'>g</span></span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Sugar:</span> {nutritions[0] === undefined  ? "0" : nutritions[0].sugar_g}<span className='font-bold'>g</span></span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Protein:</span> {nutritions[0] === undefined  ? "0" : nutritions[0].protein_g}<span className='font-bold'>g</span></span>
        </CardContent>
      </Card>
    </div>
  )
}

export default NutritionalComponent