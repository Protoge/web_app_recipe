import React from "react";
import { motion } from "framer-motion";

const TextAnimation = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5 } }, // Adjust the delay as needed
  };

  return (
    <div>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        Text 1
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        Text 2
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        Text 3
      </motion.p>
    </div>
  );
};

export default TextAnimation;
