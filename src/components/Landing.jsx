import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

function Landing() {
   
  return (
    <div data-scroll data-scroll-speed="-.5" className='w-full h-screen pt-1'>
        <div className='textstructure mt-40 px-20 '>
            {["We Create","Eye-Opening","Presentaions"].map((item,index)=>{
                return (
                    <div className="masker">
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (
                                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1],duration:1}} className='w-[9vw] h-[6vw] relative  rounded-[1rem]  bg-red-500'></motion.div>)}
                <h1 className='uppercase text-[7vw] leading-[6vw]  tracking-tighter font-bold font-["Gilroy"]'>{item}</h1>
                 </div>
            </div>
        );
            })}
            
        </div>
        <div className='border-t-[1px]  border-zinc-400 mt-32 flex justify-between items-center px-20 py-5 '>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-regular tracking-tight leading-none'>{item}</p>
            ))}

            <div className='start flex items-center gap-1 text-s '>
                <div className='px-4  border-[1px] border-zinc-800 rounded-full'>START THE PROJECT</div>
                <div className='w-7 h-7 flex items-center justify-center  rounded-full border-[1px] border-zinc-800   rotate-[40deg]'>  <FaArrowUpLong />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing