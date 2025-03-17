import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Eyes() {

    const [rotate, setRotate] = useState(0)
    
    useEffect(()=>{
        window.addEventListener('mousemove', (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let  deltaX = mouseX - window.innerWidth / 2;
        let  deltaY = mouseY - window.innerHeight / 2;

        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle-180)
        })
    })
  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.2" className=' relative w-full h-full bg-cover bg-center  bg-[#CDEA68] flex items-center justify-center flex-col rounded-tl-3xl rounded-tr-3xl'>
        <div className="text w-full h-full leading-none tracking-tighter flex items-center justify-center flex-col rounded-tl-3xl rounded-tr-3xl">
          <div className="text-[12vw] leading-none tracking-tighter text-zinc-800 font-bold">READY</div>
          <div className="text-[12vw] leading-none tracking-tighter  text-zinc-800 font-bold">TO START</div>
          <div className="text-[12vw] leading-none tracking-tighter  text-zinc-800 font-bold">THE PROJECT ?</div>
          <button className="px-5 pl-4 py-3 flex items-center gap-10 bg-zinc-800   rounded-full text-white ">
            START THE PROJECT
            <div className="w-2 h-2  rounded-full bg-zinc-200"></div>
          </button>

        </div>
        <div className="absolute flex justify-center gap-5 top-1/3 left-1/2 bg -translate-x-[50%] -translate-y-[50%] w-1/3  ">
          <div className="bg-white border-2 h-[12vw] w-[12vw] rounded-full flex items-center justify-center">
            <div  className=" h-2/3 w-2/3 rounded-full bg-zinc-800 relative  ">
            <p className="flex items-center justify-center mt-14 font-['Neue_Montreal']">PLAY</p>
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" absolute line w-full h-10 top-1/2 left-1/2 bg -translate-x-[50%] -translate-y-[50%] ">
              <div className="h-10 w-10 rounded-full bg-white "></div>
            </div>
            </div>
          </div>
          <div className="bg-white  h-[12vw] w-[12vw] rounded-full flex items-center justify-center">
            <div className=" h-2/3 w-2/3 rounded-full bg-zinc-800 relative">
            <p className="flex items-center justify-center mt-14 font-['Neue_Montreal']">PLAY</p>
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" absolute line w-full h-10 top-1/2 left-1/2 bg -translate-x-[50%] -translate-y-[50%] ">
              <div className="h-10 w-10 rounded-full bg-white "></div>
            </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Eyes;
