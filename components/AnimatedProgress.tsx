"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimatedProgress() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const innerWidth = 80; // width of the sliding gradient bar in pixels
  const stepSize = 3; // pixels to move per interval
  const intervalDelay = 15; // interval delay in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((oldPos) => {
        if (!containerRef.current) return oldPos;
        const maxPos = containerRef.current.offsetWidth - innerWidth;
        if (oldPos >= maxPos) {
          setDirection(-1);
          return oldPos - stepSize;
        } else if (oldPos <= 0) {
          setDirection(1);
          return oldPos + stepSize;
        } else {
          return oldPos + direction * stepSize;
        }
      });
    }, intervalDelay);

    return () => {
      clearInterval(interval);
    };
  }, [direction]);

  return (
    <div
      ref={containerRef}
      className="w-full h-6 bg-gray-700 rounded overflow-hidden relative"
      aria-label="Loading progress"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={position}
    >
      <div
        className="absolute top-0 h-full bg-gradient-to-r from-blue-500 to-green-400 rounded"
        style={{ width: `${innerWidth}px`, left: `${position}px`, transition: "left 0.01s linear" }}
      />
    </div>
  );
}