import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className=" grid place-items-center h-screen object-center bg-no-repeat bg-cover">
        <div className="absolute top-0  right-0 w-1/3 -z-10  h-full border-l-8"
            style={{
                clipPath:'polygon(29% 0, 100% 0, 100% 100%, 0% 100%)'
                
            }}
        >
            <div className="bg-hero h-full w-full bg-cover bg-center"></div>
        </div>
        <div className="absolute  -z-10 left-7 top-0">
            <img src="/needle.png" alt="" />
        </div>
        <svg
      className="absolute bottom-0 w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 220"
      fill="#F7F7F8" 
    >
      <path
        fillOpacity="1"
        d="M0,288L1440,96L1440,320L0,320Z"
      ></path>
    </svg>
    <div className=" absolute bottom-0 w-32">
                <img src="/scissors.png" alt="" />
            </div>
        <article className='space-y-8 mt-10'>
        <h1 className="text-center font-cormorant font-extrabold text-4xl md:text-6xl xl:text-7xl"> <span className="relative mr-6">Step Into <img src="/pen_needle.png" alt="" className="absolute -right-5 w-7 md:w-12 top-1/4 animate-pulse" /> </span>Style with  <span className="bg-background underline underline-offset-2 ">Doche</span> <br /> Redefining Modern <span className="bg-background">Elegance</span> </h1>
        <div className="flex flex-col items-center gap-5">
            <p className="text-gray-400 text-center">Effortlessly Stylish, Thoughtfully Designed – Redefining Fashion for Every Moment</p>
            <Button className='rounded-full font-semibold p-6 text-lg relative' >
            Discover Your Style 
            </Button>
        </div>
        </article>
    </section>
  )
}

export default Hero