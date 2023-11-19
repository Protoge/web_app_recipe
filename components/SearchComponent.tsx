"use client"
import { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { useDebounce } from '@/hooks/use-debounce';
import { useStore } from '@/hooks/use-hook';
import LogoComponent from './LogoComponent';

import { motion, useAnimation } from "framer-motion";


const SearchComponent: React.FC = () => {
  const [foodName, setFoodName] = useState<string>('');
  const searchparams = useSearchParams();
  const router = useRouter()
  const { clearNutritions, setNutritions, clearRecipes, setRecipes, nutritions } = useStore()


  const debouncedValueNutrition = useDebounce<string>(searchparams.get("foodName") || "", 1500)

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




  }, [clearNutritions, clearRecipes, debouncedValueNutrition, debouncedValueRecipe, setNutritions, setRecipes])


  const bounceVariants = {
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5, // Adjust the duration as needed
        repeat: Infinity, // Repeat the animation indefinitely
      },
    },
  };

  const controls = useAnimation()

  return (
    <div className="opacity-75 hover:opacity-100 flex-grow-1 flex flex-col gap-5 items-center">
      <motion.div
        variants={bounceVariants}
        animate={controls}
        initial="bounce"
        whileHover="bounce"
        whileFocus="bounce"

      >
        <LogoComponent width={120} height={120} alt='logo' img='/logo.png' />
      </motion.div>
      <motion.div onHoverStart={() => controls.start('bounce')} onHoverEnd={() => controls.stop()}>
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
      </motion.div>
    </div>
  );
};

export default SearchComponent;
