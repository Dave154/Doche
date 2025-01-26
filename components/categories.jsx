import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
   <section className="">
       <div className="p-5">
         <h2 className=" font-extralight text-3xl md:text-4xl font-cormorant mb-6">Explore Our Vast Categories</h2>
         <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
         <div className="category group col-span-3 h-96">
                    <Image
                        src={'/shoe.jpg'}
                        alt='image'
                        width={700}
                        height={200}
                        className='object-cover w-full h-full'
                    />
                    <div className="category_tag">
                        <p className="category_tag_name">#Shoes</p>
                    </div>
                </div>
                <div className="category group col-span-5 h-96">
                    <Image
                        src={'/beads.jpg'}
                        alt='image'
                        width={700}
                        height={200}
                        className='object-cover w-full h-full'
                    />
                    <div className="category_tag">
                        <p className="category_tag_name">#Beads</p>
                    </div>
                </div>
                <div className="category group col-span-5
                ">
                    <Image
                        src={'/bg_image.jpg'}
                        alt='image'
                        width={700}
                        height={200}
                        className='object-cover w-full h-full'
                    />
                    <div className="category_tag">
                        <p className="category_tag_name">#Native Attire</p>
                    </div>
                </div>
                <div className="category group col-span-3">
                    <Image
                        src={'/africa.jpg'}
                        alt='image'
                        width={700}
                        height={200}
                        className='object-cover w-full h-full'
                    />
                    <div className="category_tag col-span-2">
                        <p className="category_tag_name">#Roots</p>
                    </div>
                </div>
                <div className="category group">
                    <Image
                        src={'/img_2.jpg'}
                        alt='image'
                        width={700}
                        height={200}
                        className='object-cover w-full h-full'
                    />
                    <div className="category_tag">
                        <p className="category_tag_name">#Couple</p>
                    </div>
                </div>
                <div className="category group col-span-5">
                    <Image
                        src={'/img_4.jpg'}
                        alt='image'
                        width={700}
                        height={200}
                        className='object-cover w-full h-full'
                    />
                    <div className="category_tag">
                        <p className="category_tag_name">#Modern</p>
                    </div>
                </div>
                <div className="category group " >
                    <Image
                        src={'/doche_logo.png'}
                        alt='image'
                        width={700}
                        height={200}
                        className='object-cover w-full h-full'
                    />
                    <div className="category_tag">
                        <p className="category_tag_name">#Special</p>
                    </div>
                </div>
                <div className="category group">
                    <Image
                        src={'/shoe_2.jpg'}
                        alt='image'
                        width={700}
                        height={200}
                        className='object-cover w-full h-full'
                    />
                    <div className="category_tag">
                        <p className="category_tag_name">#Shoes</p>
                    </div>
                </div>

                
         </div>
       </div>
   </section>
  )
}

export default Categories