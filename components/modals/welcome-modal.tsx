"use client"
import Image from 'next/image'
import { Dialog, DialogContent } from '../ui/dialog'
import { welcomeModal } from '@/hooks/use-modal'

const WelcomeModal = () => {



  const {isOpen, onClose} = welcomeModal()



  return (
  
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className='bg-green-300/75'>
          <Image src="/welcome-modal.jpg" className="absolute left-0 h-[270px]" width={130} height={130} alt="welcome-modal"/>
            <div className='flex items-center justify-between m-[75px] gap-x-2'>
              <div className='ml-10'>
                <h2 className='font-bold'>Welcome to NutriPocket</h2>
                <span className='text-xs text-muted-foreground'>
                  A simple nutrition app
                </span>
              </div>
              <div className=''>
                <div>
                  <h1>Login</h1>
                  <h1>Continue</h1>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
    
  )
}

export default WelcomeModal