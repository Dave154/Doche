'use client';

import Link from "next/link";

const TopNav = () => {
    const menu =[
        {
            route:'',
            name:'Collection'
        },
        {
            route:'',
            name:''
        },
        {
            route:'',
            name:'About'
        },
        {
            route:'',
            name:'Contact'
        },
        {
            route:'',
            name:'VIP'
        },
    ]
  return (
    <ul className="flex gap-5 items-center shadow-md rounded-3xl p-2 w-full">
        {menu.map((item,index)=>{
            const {name,route}=item
            return <Link href={route}>
                <p className="">{name}</p> 
                {
                    name === 'VIP'&&
                    <p className="text-gray-400 text-nowrap">Coming soon</p>
                }
                
            </Link>
        })}
</ul>
  )
}

export default TopNav