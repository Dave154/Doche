import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="">
        <div className="">
          <div className="max-h-96 max-w-3xl overflow-hidden mx-auto rounded-xl shadow-2xl
          ">
            <Image
              src={'/img_2.jpg'}
              alt='image'
              width={1100}
              height={200}
              className='object-cover w-full'
            />
          </div>
          
            <h2 className="py-8 text-right text-base  tracking-wide 
            font-bold  md:text-2xl  lg:text-3xl xl:text-4xl uppercase  
            before:w-64 before:h-1 before:bg-gray-900  before:inline-block before:content-['']
            after:w-64 after:h-1 after:bg-gray-900  after:inline-block after:content-['']
            leading-[2rem]
            "
            >
              We are all about style and comfort <br /> Our mission is to cater for all the trendsetters <br /> out there loooking for the latest Fashion</h2>
        </div>
    </section>
  )
}

export default About