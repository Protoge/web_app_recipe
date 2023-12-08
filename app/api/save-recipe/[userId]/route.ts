import { getSession } from "next-auth/react"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { getAuthSession } from "@/lib/auth"

export async function POST(req: Request, { params }: { params: { userId: string } }) {
    try {
        // Check if the user is authenticated
        const session = await getAuthSession()

        if (!session) {
            // If the user is not authenticated, redirect to sign-in page

            return NextResponse.json({ error: "Please sign in to save recipes" })
        }

        const { title, ingredients, servings, instructions } = await req.json()

        const res = await db.recipe.create({
            data: {
                title,
                ingredients,
                servings,
                instructions,
                userId: params.userId
            }
        })

        return NextResponse.json(res)
    } catch (error) {
        return new NextResponse("internal error", { status: 500 })
    }
}
