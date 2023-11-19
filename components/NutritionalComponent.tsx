"use client"
import { useStore } from '@/hooks/use-hook';
import React, { useEffect, useState } from 'react';
import AdditionalNutritionalComponent from './AdditionalNutritionalComponent';
import PieChartComponent from './PieChartComponent';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';


const NutritionalComponent = () => {
  const [animationData, setAnimationData] = useState<{ name: string; value: number; }[]>([]);
  const { nutritions } = useStore()
  const [dialogOpen, setDialogOpen] = useState(false)



  useEffect(() => {
    // Update the animationData when nutritions change

    if (nutritions.calories === 0) {

      return setAnimationData([{ name: "Empty", value: 100 }]);
    }
    const newData = [
      {
        name: "Carbs",
        value: nutritions.carbohydrates_total_g,
      },
      {
        name: "Fats",
        value: nutritions.fat_total_g,
      },
      {
        name: "Protein",
        value: nutritions.protein_g,
      },
    ];
    setAnimationData(newData);
  }, [nutritions]);

  const theme = useTheme()

  return (
    <div className={cn('opacity-75 hover:opacity-100 transition duration-200 ease-in-out -m-20', theme.theme === "dark" ? "text-black" : "text-white")}>
      <Dialog>
        <DialogTrigger>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <PieChartComponent animationData={animationData} />
              </TooltipTrigger>
              <TooltipContent className='relative z-10 top-[100px]' >
                <p>Click for more information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DialogTrigger>
        <DialogContent className='text-black'>
          <AdditionalNutritionalComponent nutritions={nutritions} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NutritionalComponent;
