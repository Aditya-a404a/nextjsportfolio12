import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { GoogleGeminiEffectDemo } from "@/components/ui/ggemini";
import Skills from "./components/Skills";



export default function Page() {
  return ( 
    
    <div className= "min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
      <div className= " max-w-7xl mx-auto p-10  ">
        <Navbar />
        <HeroSection />
        

      </div>
      <div className=" h-10 xl:h-32 bg-gradient-to-t from-black  absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      <GoogleGeminiEffectDemo  />
         
      </div>
      
      {/* <GoogleGeminiEffect pathLengths={[0.2, 0.15, 0.1, 0.05, 0]} String="Skills" /> */}
      <div className= " max-w-7xl mx-auto p-10  ">
        <Skills />
        

      </div>
      
      
    </div>
  );
}