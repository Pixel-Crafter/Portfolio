"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function AnimatedProgress() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false); // wait for client
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const innerWidth = 80;
  const stepSize = 3;
  const intervalDelay = 15;

  // Set mounted to true after client render
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // only run on client

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

    return () => clearInterval(interval);
  }, [direction, mounted]);

  // Don't render anything until mounted
  if (!mounted) return null;

  const bgColor = theme === "dark" ? "bg-gray-700" : "bg-gray-300";
  const gradient = theme === "dark"
    ? "from-blue-500 to-green-400"
    : "from-blue-300 to-green-300";

  return (
    <div
      ref={containerRef}
      className={`w-full h-6 ${bgColor} rounded overflow-hidden relative transition-colors duration-300`}
      aria-label="Loading progress"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={position}
    >
      <div
        className={`absolute top-0 h-full bg-gradient-to-r ${gradient} rounded`}
        style={{ width: `${innerWidth}px`, left: `${position}px`, transition: "left 0.01s linear" }}
      />
    </div>
  );
}