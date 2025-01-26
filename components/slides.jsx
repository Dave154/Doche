import Image from 'next/image'
import React from 'react'

const Slides = () => {
    const slides= [
        {
            image:'/img_2.jpg',
            category:'Natives',
            name:'Brown Agbada'
        },
        {
            image:'/bg_image.jpg',
            category:'Natives',
            name:'Brown Agbada'
        },
        {
            image:'/img_2.jpg',
            category:'Natives',
            name:'Brown Agbada'
        },
        {
            image:'/img_2.jpg',
            category:'Natives',
            name:'Brown Agbada'
        },
        {
            image:'/bg_image.jpg',
            category:'Natives',
            name:'Brown Agbada'
        },
        {
            image:'/img_2.jpg',
            category:'Natives',
            name:'Brown Agbada'
        },
        {
            image:'/img_2.jpg',
            category:'Natives',
            name:'Brown Agbada'
        },
        {
            image:'/bg_image.jpg',
            category:'Natives',
            name:'Brown Agbada'
        },
        {
            image:'/img_2.jpg',
            category:'Natives',
            name:'Brown Agbada'
        },

    ]


  return (
    <section className="mb-5">
        <div className="flex gap-4 no-scrollbar overflow-x-auto">
            {
                slides.map((item,i)=>{
                    const {image,category,name}=item
                        return <div key={i} className="animate-slide flex-none relative group  transition-all rounded-xl overflow-hidden h-[30rem] w-80  shadow-md">
                        <Image
                            src={image}
                            alt='name'
                            width={1000}
                            height={300}
                            className='group-hover:object-fill  object-cover w-full h-full'
                        />
                        <div className="absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all p-6  text-white font-bold">
                           <div className="rounded-full backdrop-blur-lg bg-gray-100/40 w-fit py-1 px-4 font-cormorant">{category}</div>
                           <div className="absolute bottom-0 animate-slide">
                            {name}
                            </div>
                        </div>
                    </div>
                })
            }
            
            
        </div>
    </section>
  )
}

export default Slides