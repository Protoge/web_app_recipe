"use client"
import WelcomeModal from '@/components/modals/welcome-modal'
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {

    const [isMounted,setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
      },[isMounted])
    
      if(!isMounted){
        return null
      }

  return (
    <>
        <WelcomeModal/>
    </>
  )
}

export default ModalProvider