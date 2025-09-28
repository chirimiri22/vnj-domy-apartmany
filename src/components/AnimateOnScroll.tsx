// Local animated on scroll wrapper
import { motion, useInView } from "framer-motion";
import { type ReactNode, useRef } from "react";

export const AnimatedOnScroll = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
