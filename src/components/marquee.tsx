"use client";

import { motion } from "framer-motion";
import React from "react";

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
}

export function Marquee({ text, speed = 20, className }: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex py-4 ${className}`}>
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
        className="flex"
      >
        <div className="flex shrink-0">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 text-[8vw] md:text-[5vw] font-bold tracking-tighter uppercase">
              {text} <span className="text-muted-foreground opacity-30">—</span>
            </span>
          ))}
        </div>
        <div className="flex shrink-0">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 text-[8vw] md:text-[5vw] font-bold tracking-tighter uppercase">
              {text} <span className="text-muted-foreground opacity-30">—</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
