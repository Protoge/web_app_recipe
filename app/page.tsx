import NutritionalComponent from "@/components/NutritionalComponent";
import RecipeComponent from "@/components/RecipeComponent";
import SearchComponent from "@/components/SearchComponent";
import AnimatedComponent from "@/components/AnimatedComponent";

export default function Home() {
  return (
    <AnimatedComponent>
    <div className="sm:flex-col-1 md:flex justify-center mx-10 gap-x-52 min-h-screen items-center">
          
          <SearchComponent/>
          <NutritionalComponent/>      
          <RecipeComponent />
        
    </div>
    </AnimatedComponent>
  )
}
