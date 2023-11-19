"use client"
import { signIn } from 'next-auth/react'
import { Button } from './ui/button'

const SignInButtonComponent = () => {
  return (
    <Button className='rounded-none' onClick={() => signIn("google")}>Sign in</Button>
  )
}

export default SignInButtonComponent