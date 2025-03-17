import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Power4 } from "gsap";

function Feature() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20">
      <h1 className='w-full font-["Neue_Montreal"] px-20 text-5xl pb-10'>
        Featured projects
      </h1>
      <div className="w-full border-[1px] border-zinc-600 "></div>
      <div className="px-20 ">
        <div className=" flex gap-[30vw]">
          <div className="mt-12 -mb-8 flex items-center uppercase text-zinc-700">
            <GoDotFill /> CARDBOARD SPACESHIP
          </div>
          <div className="mt-12 -mb-8 flex items-center uppercase text-zinc-700">
            <GoDotFill /> AH2 & Matt Horn
          </div>
        </div>
        <div className="cards w-full flex gap-4 mt-10">
          <motion.div onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)} className="cardcontainer w-1/2 h-[80vh] relative">
            <h1 className="flex overflow-hidden  text-[#CDEA68] text-8xl z-10  font-bold absolute top-1/2 right-0 tracking-tighter leading-none translate-x-1/2 -translate-y-1/2 ">
              {"CARDBOARD SPACESHIP".split("").map((item, index) => (
                <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.05,
                }}
                className="inline-block"
              >
                {item}
              </motion.span>
              ))}
            </h1>
            <div className="card1 w-full h-full ">
              <img
                className="overflow-hidden rounded-xl"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
              <div className="flex gap-8 pt-5  font-['Neue_Montreal']">
                {[
                  "BRANDED TEMPLATE",
                  "SALES DECK",
                  "SOCIAL MEDIA TEMPLATES",
                ].map((item, index) => (
                  <button
                    key={index}
                    className="capitalize p-2 border-2 rounded-3xl border-[#696969ff] text-sm font-light font-['Neue_Montreal']"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)} className="cardcontainer w-1/2 h-[80vh] relative ">
            <h1 className=" flex overflow-hidden text-[#CDEA68] text-8xl font-bold absolute top-1/2 right-full tracking-tighter leading-none translate-x-1/2 -translate-y-1/2 ">
              {"AH2 & Matt Horn".split("").map((item, index) => (
                <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.05,
                }}
                className="inline-block"
              >
                {item}
              </motion.span>
              ))}
            </h1>
            <div className="card2 w-full h-full  ">
              <img
                className="overflow-hidden rounded-xl"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
              <div className="flex gap-8    pt-5  font-['Neue_Montreal']">
                {["PITCH DECK"].map((item, index) => (
                  <button
                    key={index}
                    className="capitalize p-2   border-2 rounded-3xl border-[#696969ff] text-sm font-light font-['Neue_Montreal']"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <div className=" flex gap-[40vw] pt-[4vw]">
            <div className="mt-12 -mb-8 flex items-center uppercase text-zinc-800">
              <GoDotFill /> FYDE
            </div>
            <div className="mt-12 -mb-8 flex items-center uppercase text-zinc-800">
              <GoDotFill /> VISE
            </div>
          </div>

          <div className="cards w-full flex gap-4 mt-10">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer w-1/2 h-[80vh] relative"
            >
              <h1 className="text-[#CDEA68] z-10 flex font-bold absolute overflow-hidden top-1/2 right-0 tracking-tighter leading-none translate-x-1/2 -translate-y-1/2 text-8xl">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card3 w-full h-full ">
                <img
                  className="overflow-hidden rounded-xl"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
                <div className="flex gap-8    pt-5  font-['Neue_Montreal']">
                  {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map(
                    (item, index) => (
                      <button
                        key={index}
                        className="capitalize p-2   border-2 rounded-3xl border-[#696969ff] text-sm font-light font-['Neue_Montreal']"
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer w-1/2 h-[80vh] relative "
            >
              <h1 className="text-[#CDEA68] flex overflow-hidden text-8xl font-bold absolute top-1/2 right-full tracking-tighter leading-none translate-x-1/2 -translate-y-1/2 ">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card4 w-full h-full  ">
                <img
                  className="overflow-hidden rounded-xl"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
                <div className="flex gap-8    pt-5  font-['Neue_Montreal']">
                  {["AGENCY", "COMPANY PRESENTATION"].map((item, index) => (
                    <button
                      key={index}
                      className="capitalize p-2   border-2 rounded-3xl border-[#050505] text-sm font-light font-['Neue_Montreal']"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
