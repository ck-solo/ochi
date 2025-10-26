import React from "react";   

function About() {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#000]">
      <h1 className='font-["Neue_Montreal"] text-[4vw] tracking-tighter  leading-[4.5vw] ml-8'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds , sell products, expplain complex ideas, and
        hire great people.
      </h1>
      <div className="w-full flex gap-5  border-t-[1px] pt-5 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-5xl ml-9">Our approach:</h1>
          <button className="px-9 pl-4 py-3 flex items-center gap-10 bg-zinc-800 mt-5 ml-9 rounded-full text-white ">
            Read More.
            <div className="w-2 h-2  rounded-full bg-zinc-200"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#c0b895] mr-9"><img className="rounded-2xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  );
}

export default About;
