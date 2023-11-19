import React from 'react'

import SignInButtonComponent from './SignInButtonComponent'
import NavigationalMenuAuthenticated from './NavigationalMenuAuthenticated'
import { getRecipes } from '@/actions/getRecipes'
import { getAuthSession } from '@/lib/auth'


const Navbar = async () => {

    const data = await getAuthSession()

    const recipes = await getRecipes(data?.user.id!)

    return (
        <NavigationalMenuAuthenticated recipes={recipes}/>
    )
}

export default Navbar