"use client"
import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedComponentProps {
  children: ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps & MotionProps> = ({
  children,
  ...rest
}) => {
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
