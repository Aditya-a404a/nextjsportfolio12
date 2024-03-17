"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
 
export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.3], [0.2, 2.0]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.3], [0.15, 2.0]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.3], [0.1, 2.0]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.3], [0.05, 2.0]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.3], [0, 2.0]);
 
  return (
    <div
      className="h-[100vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 "
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}