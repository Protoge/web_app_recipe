"use client"
import { motion, MotionProps } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import {welcomeModal} from '../hooks/use-modal'

interface AnimatedComponentProps {
  children: ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps & MotionProps> = ({
  children,
  ...rest
}) => {
  const [isMounted,setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    welcomeModal.persist.clearStorage()
  },[isMounted])

  if(!isMounted){
    return null
  }
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
