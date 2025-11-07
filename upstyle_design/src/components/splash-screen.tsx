import { motion } from "motion/react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="h-full bg-white flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 1000);
        }}
      >
        <div className="text-center">
          <motion.div
            className="text-6xl mb-4"
            animate={{
              color: ["#000000", "#5EACA0", "#000000"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            UpStyle
          </motion.div>
          <motion.div
            className="h-1 bg-[#5EACA0] rounded-full mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
