 import { Mail } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Footer = () => {
    const footer_deets=[
        {
            title:'Explore Doche',
            list:[
                {
                    link:'',
                    name:'Product',
                },
                {
                    link:'',
                    name:'Store',
                },
                {
                    link:'',
                    name:'About Us',
                },
                {
                    link:'',
                    name:'Contact',
                }
            ]
        },

        {
            title:'Our Socials',
            list:[
                {
                    link:'',
                    name:'Twitter',
                },
                {
                    link:'',
                    name:'Instagram',
                }, {
                    link:'',
                    name:'Facebook',
                },
            ]
        }
    ]
  return (
    <footer className=''>
            <div className="font-extrabold font-cormorant text-5xl md:text-[10rem] xl:text-[16rem] leading-10 text-center py-36">DOCHE</div>
            <div className="flex flex-col md:flex-row justify-center gap-7 md:justify-between p-3 max-w-6xl mx-auto">
                <div className="space-y-6">
                    <p className="font-semibold">Join our newsletter for more fashion updates</p>
                    <form className="flex shadow-md overflow-hidden rounded-tl-full rounded-bl-full" >
                        <input type="text" className="flex-1 outline-none border-none " />
                        <Button>
                            Send <Mail />
                        </Button>
                    </form>
                </div>

                <div className="flex justify-center gap-4">
                    {
                        footer_deets.map((item,i)=>{
                            const {title,list}= item
                            return <div className="space-y-4" key={i}>
                            <p className="font-bold">{title}</p>
                            <ul className="space-y-2">
                                {list.map((listitem,index)=>{
                                    const {name,link} = listitem
                                    return <li className="">
                                    <Link href={link} className="font-extralight" key={index}>{name}</Link>
                                    </li>
                                  
                                })}
                            </ul>
                        </div>
                        })
                    }
                    
                </div>
                
            </div>
    </footer>
  )
}

export default Footer