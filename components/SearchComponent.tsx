"use client"
import { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { useDebounce } from '@/hooks/use-debounce';
import { useStore } from '@/hooks/use-hook';

const SearchComponent: React.FC = () => {
  const [foodName, setFoodName] = useState<string>('');
  const searchparams = useSearchParams();
  const router = useRouter()
  const {clearNutritions,setNutritions, clearRecipes,setRecipes, nutritions} = useStore()


  const debouncedValueNutrition = useDebounce<string>(searchparams.get("foodName") || "",1500)

  const debouncedValueRecipe = useDebounce<string>(searchparams.get("foodName") || "", 2500)
  useEffect(() => {
    
    axios.get(`http://localhost:3000/api/nutrition/${debouncedValueNutrition}`).then(data => {
      clearNutritions();
      
    
      setNutritions(data.data[0])    
      


    }).catch(error => clearNutritions())

    axios.get(`http://localhost:3000/api/recipe/${debouncedValueRecipe}`).then(data => {
      clearRecipes()
          setRecipes(data.data)
        }).catch(error => console.log(error))



    
  },[debouncedValueNutrition,debouncedValueRecipe])

  return (
    <div className="opacity-75 hover:opacity-100 flex-grow-1">
      <Input
        className="text-black"
        type="text"
        value={foodName}
        placeholder="Enter your food..."
        onChange={(e) => {
          setFoodName(e.target.value)
          router.push(`http://localhost:3000/?foodName=${e.target.value}`)
        }}
      />
    </div>
  );
};

export default SearchComponent;
