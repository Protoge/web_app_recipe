"use client"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import SaveRecipesList from './SaveRecipesList'
import { Button } from './ui/button'
import { signOut, useSession } from 'next-auth/react'
import SignInButtonComponent from './SignInButtonComponent'
import { Recipe } from '@prisma/client'


interface NavigationalMenuAuthenticatedProps {
    recipes: Recipe[]
}

const NavigationalMenuAuthenticated = ({ recipes }: NavigationalMenuAuthenticatedProps) => {

    const { status } = useSession()


    return (
        <div className='absolute right-0'>
            {
                status === "authenticated" ? (
                    <NavigationMenu>
                        <NavigationMenuList>
                            {recipes.length <= 0 ? null : (
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        View recipes
                                    </NavigationMenuTrigger>
                                    {
                                        recipes.length >= 1 && (<SaveRecipesList recipes={recipes} />)
                                    }
                                </NavigationMenuItem>
                            )}

                            <NavigationMenuItem>
                                <Button className='rounded-none' onClick={() => signOut()} variant="destructive">
                                    Sign Out
                                </Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                ) : (
                    <>
                        <SignInButtonComponent />
                    </>
                )
            }
        </div>
    )
}

export default NavigationalMenuAuthenticated