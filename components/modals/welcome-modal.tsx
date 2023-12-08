"use client"
import Image from 'next/image'
import { Dialog, DialogContent } from '../ui/dialog'
import { welcomeModal } from '@/hooks/use-modal'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { signIn, useSession } from 'next-auth/react'
import { getAuthSession } from '@/lib/auth'

const WelcomeModal = () => {

  const { status } = useSession()



  const { isOpen, onClose } = welcomeModal()

  return (


    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='bg-green-300/75 '>
        <Image src="/welcome-modal.jpg" className="absolute left-0 h-[302px]" width={130} height={130} alt="welcome-modal" />
        <div className='flex items-center justify-between m-[75px] gap-x-2'>
          <div className='ml-10'>
            <h2 className='font-bold'>Welcome to NutriPocket</h2>
            <span className='text-[10px] text-muted-foreground'>
              A simple nutrition app
            </span>
          </div>
          <Separator orientation='vertical' className='bg-white' />
          <div>
            <div className='flex flex-col items-center justify-between'>
              {
                status === "authenticated" ? (
                  <Button className='bg-green-500/75' onClick={onClose}>Continue</Button>
                ) : (
                  <>
                    <Button className='bg-green-500/75' onClick={() => { onClose(); signIn("google") }}>Login</Button>
                    <span>or</span>
                    <Button className='bg-green-500/75' onClick={onClose}>Continue</Button>
                  </>
                )
              }

            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>

  )
}

export default WelcomeModal