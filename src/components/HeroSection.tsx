"use client";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { SparklesCore } from "./ui/sparkles";
import {  TypewriterEffectSmooth } from "./ui/typewriter-effect";
   

const words = [
  {
    text: "Welcome",
  },
  {
    text: "To",
  },
  {
    text: "My",
  },
  {
    text: "Porrtfolio.",
  },
];

function HeroSection() {
  return (
    <>
      <Spotlight 
        className="-top-40 left-0 md:left-10 md:-top-20"
        fill="blue"
      />

      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

          
          <TypewriterEffectSmooth words={words} className=" font-bold text-center relative z-20 mb-2" />
        

        <p className="text-center mb-8 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-200">
          Explore a curated collection of inspiring portfolio websites for design & creative professionals.
        </p>
        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={2}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#0041c2"
          />

          
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" ></div>
            
        </div>

        <div>
        <Link href={'/contact'}>
          <Button className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl">
              Join Us
          </Button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
