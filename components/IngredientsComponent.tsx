import React from 'react'

interface IngredientsComponentProps {
    ingredients:string
}

const IngredientsComponent = ({ingredients}:IngredientsComponentProps) => {

    const ingredientsArray = ingredients.split("|")

    

    

  return (
    <div>
        <ul className='list-disc pl-4'>
            {
                ingredientsArray.map(ingredient => (
                    <>
                    <li key={ingredient}>{ingredient}</li>
                    </>
                ))
            }
        </ul>
    </div>
  )
}

export default IngredientsComponent