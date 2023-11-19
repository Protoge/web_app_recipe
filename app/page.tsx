import NutritionalComponent from "@/components/NutritionalComponent";
import RecipeComponent from "@/components/RecipeComponent";
import SearchComponent from "@/components/SearchComponent";
import AnimatedComponent from "@/components/AnimatedComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { db } from "@/lib/db";


export default async function Home() {

  const a = await getServerSession(authOptions)

  console.log(a)

  const user = await db.user.findMany()

  console.log(user)

  return (
    <AnimatedComponent>
      <div className="sm:flex-col-1 md:flex justify-center mx-10 gap-x-52 min-h-screen items-center">

        <SearchComponent />
        <NutritionalComponent />
        <RecipeComponent />

      </div>
    </AnimatedComponent>
  )
}
