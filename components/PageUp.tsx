import { motion } from "framer-motion";

// variants of motion
const upAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* { render 6 motion divs, each presenting a step of the stairs} 
    Each div will have the same animation defined by the stairsAnimation object
    The delay for each div is calculated dynamically baes on it's reversed index, creating a stagger effect with decreasing delay for each subsequent step */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={upAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            easedelay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
