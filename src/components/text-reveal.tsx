"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={className}>
      <p className="overflow-hidden">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.8,
              delay: index * 0.01,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </p>
    </div>
  );
}
