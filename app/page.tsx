import NutritionalComponent from "@/components/NutritionalComponent";
import RecipeComponent from "@/components/RecipeComponent";
import SearchComponent from "@/components/SearchComponent";
import AnimatedComponent from "@/components/AnimatedComponent";
import TestComponent from "@/components/TestComponent";

export default function Home() {
  return (
    <AnimatedComponent>
    <div className="flex justify-center mx-10 gap-x-52 min-h-screen items-center">
        
          <SearchComponent/>
          <NutritionalComponent/>      
          <RecipeComponent />
        
    </div>
    </AnimatedComponent>
  )
}
