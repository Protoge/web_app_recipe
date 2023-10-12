"use client"
import React from 'react'
import { Button } from './ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {

    const {status} = useSession()

    

  return (
    <div className='absolute right-0'>
        {
            status === "authenticated" ? (
                <>
                    <Button className='rounded-none'>Saved recipes</Button>
                    <Button className='rounded-none' onClick={() => signOut()} variant="destructive">
                        Sign Out
                    </Button>
                </>
            ) : (
                <>
                    <Button className='rounded-none' onClick={() => signIn("google")}>Sign in</Button>
                </>
            )
        }
        
    </div>
  )
}

export default Navbar