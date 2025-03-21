import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full py-20 leading-none  rounded-tl-3xl rounded-tr-3xl   text-white  bg-[#004D43]">
      <div className=" text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:10}} className="text-[22vw] leading-none font-bold uppercase -mt-12  -mb-5 tracking-tighter pr-20 ">
          We are Ochi
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:10}} className="text-[22vw] leading-none font-bold uppercase -mt-12 -mb-5 tracking-tighter pr-20   ">
          We are Ochi
        </motion.h1>
        
      </div>
    </div>
  );
}

export default Marque;
