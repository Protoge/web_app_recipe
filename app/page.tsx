import NutritionalComponent from "@/components/NutritionalComponent";
import RecipeComponent from "@/components/RecipeComponent";
import SearchComponent from "@/components/SearchComponent";
import AnimatedComponent from "@/components/AnimatedComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";



export default async function Home() {

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
