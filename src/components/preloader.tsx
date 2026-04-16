"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] bg-foreground flex flex-col items-center justify-center text-background cursor-none overflow-hidden"
        >
          <div className="flex flex-col items-start">
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10vw] font-bold tracking-tighter leading-none"
            >
                {Math.round(count)}%
            </motion.p>
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                className="h-1 bg-background mt-4"
            />
            <p className="mt-8 text-xs uppercase tracking-[0.5em] font-mono opacity-50">
                Initializing Experience
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
