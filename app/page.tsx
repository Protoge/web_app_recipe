import NutritionalComponent from "@/components/NutritionalComponent";
import RecipeComponent from "@/components/RecipeComponent";
import SearchComponent from "@/components/SearchComponent";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex justify-center mx-10 gap-x-52 min-h-screen items-center">
        <SearchComponent/>
        <NutritionalComponent/>
        <RecipeComponent />
    </div>
  )
}
