"use client";
import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import me from "../../images/me.png";
import Primary from "../../components/Button/Primary";
import Secondary from "../../components/Button/Secondary";
import Link from "next/link";

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height,
//   };
// }

// export function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = React.useState(
//     getWindowDimensions()
//   );

//   React.useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     if (typeof window === "undefined") return;
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowDimensions;
// }

const MePage = () => {
  // const { height, width } = useWindowDimensions();

  // console.log(width, height);

  return (
    <div>
      <div className="sm:flex sm:flex-col lg:grid">
        <div className="w-full max-h-screen lg:h-screen flex flex-col lg:grid lg:grid-cols-2">
          <div className="flex flex-col mx-8 mb-8 lg:mt-32 col-span-1 justify-between">
            <div className="relative">
              <span className="text-black font-semibold tracking-tight                                                                                                                                                                                                text-8xl">
                <span className={`text-7xl md:text-[150px]`}>JORAM</span>
                <br />
                <span className="text-8xl md:text-[180px] ">TENEZA</span>
              </span>
            </div>
            <div className="flex lg:px-10 justify-around text-xs lg:text-base">
              <span>MAKATI CITY, PHILIPPINES</span>
              <span className="hidden md:flex">
                {dayjs(new Date()).format("MMM DD, YYYY").toLocaleString()}
              </span>
              <span>{dayjs(new Date()).format("hh:mmA").toLocaleString()}</span>
            </div>
          </div>
          <div className="px-8 lg:px-0 w-full object-fill max-h-screen">
            <Image
              className="rounded-3xl w-full lg:h-screen lg:rounded-none"
              src={me}
              alt="logo"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
        <div className="px-8 py-20 lg:w-2/3">
          <span className="text-xl font-semibold lg:text-5xl text-black text-justify">
            Hi! I'm a Filipino web developer that currently resides in Makati
            City after growing up in Cavite, Philippines. As a long-time web
            developer, I'm excited about all the work that goes into making
            great ideas a reality. My tendency to be realistic and ask many whys
            enabled me to continuously produce high-quality work. When I'm not
            working on projects or creating fantastic new products for my
            clients, you can find me enjoying video games or watching Netflix.
          </span>
          <div className="flex flex-col xs:flex-row mt-20 gap-10">
            <a href="https://read.cv/kymngye" target="_blank">
              <Primary className="flex px-6 py-2 rounded-3xl w-full xs:w-fit min-w-fit xs:min-w-[150px] sm:w-[300px] transition ease-in-out delay-75 hover:-translate-1 hover:scale-105 duration-300">
                <span>READ CV</span>
              </Primary>
            </a>
            <a href="https://read.cv/kymngye" target="_blank">
              <Secondary className="flex px-6 py-2 rounded-3xl w-full xs:w-fit min-w-fit xs:min-w-[150px] sm:w-[300px] transition ease-in-out delay-75 hover:-translate-1 hover:scale-105 duration-300">
                <span>RESUME</span>
              </Secondary>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MePage;
