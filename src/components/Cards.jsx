import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex gap-5 items-center px-[4vw]  '>
      <div className='cardcontainer w-1/2 h-[60vh]   '>
      <div className='card relative w-full h-full  bg-[#004D43] rounded-lg flex items-center justify-center '>
      <img className=' w-[25vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
      <button className=' absolute rounded-full px-2 py-1 border-2 left-5 bottom-5 text-[13px] font-bold '>&copy;2019-2020</button>
      </div>
      </div>
      <div className='card cardcontainer flex gap-5 w-1/2 h-[60vh] '>
      <div className=' card relative w-full h-full bg-[#212121ff] rounded-lg flex items-center justify-center '>
      <img className=' w-[20vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
      <button className=' absolute rounded-full px-2 py-1 border-2 left-5 bottom-5 text-[13px] font-bold  '>RATING 5.O IN CLUTCH</button>
      
      </div>
      <div className='card relative w-full h-full bg-[#212121ff] rounded-lg flex items-center justify-center '>
      <img className=' w-[16vh] ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
      <button className=' absolute rounded-full px-2 py-1 border-2 left-5 bottom-5  text-[15px] font-bold '>BUSINESS BOOTCAMP ALUMNI</button>
      </div> 
      </div>
    </div>
  )
}

export default Cards