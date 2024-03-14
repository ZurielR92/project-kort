'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
interface Props {
  width?: number;
  height?: number;
  gap?: number;
  slides: Array<React.ReactNode>;
  direction?: "normal" | "reversed";
  duration?: number;
  className?:string
}
export const MotionSlider = ({
  slides,
  gap = 20,
  width = 90,
  height = 90,
  direction = "normal",
  duration = 8,
  className = ''
}: Props) => {
  const [items] = useState(() =>
    [...slides, ...slides, ...slides, ...slides].map((slide) => ({
      key: Math.random().toString(36),
      slide
    }))
  );

  const isReversed = direction === "reversed";
  return (
    <div>
      <motion.div
        className={className}
        style={{
          width: "100%",
          display:'flex'
        }}
        initial={{ x: 0 }}
        animate={{
          x: isReversed
            ? [-(width + gap) * slides.length, 0]
            : [0, -(width + gap) * slides.length]
        }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, index) => (
          <div
            key={item.key}
            style={{
              flexShrink: 0,
              flexGrow: 0,
              justifyContent: "flex-start",
              overflow: "hidden",
              
            }}
            className=""
          >
            <div
              style={{
                overflow: "hidden",
                marginRight: `${gap}px`
              }}
            >
              {item.slide}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
