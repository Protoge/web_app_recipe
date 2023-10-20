import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req:Request,{params}:{params:{userId:string}}){
    try{

        const {title,ingredients,servings,instructions} = await req.json()

        const res = await db.recipe.create({
            data:{
                title,
                ingredients,
                servings,
                instructions,
                userId:params.userId
            }
        })

        return NextResponse.json(res)
    }catch(error){
        return new NextResponse("internal error",{status:500})
    }
    
}