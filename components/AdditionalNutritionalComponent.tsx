import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'


interface AdditionalNutritionalComponentProps {
  nutritions: NutritionTypes
}


const AdditionalNutritionalComponent = ({nutritions}: AdditionalNutritionalComponentProps) => {

  return (
    <Card className=''>
        <CardHeader>
          <CardTitle>
            Nutritional facts
          </CardTitle>
          <span className='text-muted-foreground text-xs'>Nutrition data is scaled to 100g</span>
          <Separator/>
        </CardHeader>
        <CardContent>
          <span><span className='font-bold'>Calories:</span> {Object.keys(nutritions).length === 0   ? "0" : nutritions.calories}</span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Total Fat:</span> {Object.keys(nutritions).length === 0  ? "0" : nutritions.fat_total_g}<span className='font-bold'>g</span></span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Cholestrol:</span> {Object.keys(nutritions).length === 0  ? "0" : nutritions.cholesterol_mg}<span className='font-bold'>mg</span></span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Sodium:</span> {Object.keys(nutritions).length === 0  ? "0" : nutritions.sodium_mg}<span className='font-bold'>mg</span></span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Total Carbs:</span> {Object.keys(nutritions).length === 0  ? "0" : nutritions.carbohydrates_total_g}<span className='font-bold'>g</span></span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Sugar:</span> {Object.keys(nutritions).length === 0  ? "0" : nutritions.sugar_g}<span className='font-bold'>g</span></span>
        </CardContent>
        <CardContent>
          <span><span className='font-bold'>Protein:</span> {Object.keys(nutritions).length === 0  ? "0" : nutritions.protein_g}<span className='font-bold'>g</span></span>
        </CardContent>
    </Card>
  )
}

export default AdditionalNutritionalComponent