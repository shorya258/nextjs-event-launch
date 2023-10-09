"use client"
import Image from "next/image";
import { assets } from "@/utils/asset-utils";
import {type Framework, frameworks } from "../utils/framework-utils"
import { useState, useEffect } from "react";
export default function Home() {
  const[currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0]);
  useEffect(() => {
    let currentIndex=0;
    const rotateFrameworks=()=>{
      setCurrentFramework(frameworks[currentIndex])
      currentIndex= (currentIndex+1)%frameworks.length
    }
    const intervalId=setInterval(rotateFrameworks,2000);
    return ()=> clearInterval(intervalId)
  }, [])
  
  return (
    <main>
      <Image width={1200} height={1200} role="presentation" alt="gradient background" className="fixed inset-0 w-screen h-screen object-cover" src={assets.gradient} />
      <div className="fixed inset-0 opacity-30" 
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize:"30px",
        }}/>
    </main>
  )
}
