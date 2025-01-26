import Image from 'next/image'
import React from 'react'
import TopNav from './topNav'

const Header = () => {

  return (
    <header className=" absolute top-0 px-5 py-5 md:px-0 flex justify-center font-cormorant">
        <nav className="grid md:grid-cols-5 w-full place-content-center">
        <div className='flex gap-5 items-center  md:col-start-1'>
				
                  <Image 
                    src={'/doche_logo.png'}
                    alt=''
                    width={150}
                    height={150}
                    className='object-contain'
                  />
              
				<h2 className='font-bold font-roboto text-3xl'>Doche</h2>
			</div>

			<div className='hidden md:inline md:col-start-3 w-96 '>
				<TopNav />
			</div>
        </nav>
    </header>
  )
}

export default Header