import React from 'react'
import main from '../assets/images/home/centerimg.png'
import left from '../assets/images/home/leftimg.png'
import right from '../assets/images/home/rightimg.png'
const About = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full px-14 p-3 bg-slate-950'>
        <div className='grid grid-cols-2 w-[664px] h-[664px] '>
            <img src={main} alt="" className='w-[300px] h-[300px] object-cover border border-black rounded-xl' />
            <img src={left}alt="" className='w-[300px] h-[300px] object-cover border border-black rounded-xl' />
            <img src={right}alt=""  className='w-[300px] h-[300px] object-cover border border-black rounded-xl'/>
            <img src={main} alt="" className='w-[300px] h-[300px] object-cover border border-black rounded-xl'/>
        </div>
        <div className=' flex gap-7 md-flex flex-col w-[641px] h-[390px]'>
            <div>
                <p className='text-5xl capitalize text-white'>about the collection </p>
            </div>
            <div className='flex flex-col gap-4 w-[641px] h-[390px] '>
                <p className='text-md text-white'> The Alien Club is a collection of 7,999 Monster Ape NFTs inspired by the new wealthy generation of crypto-currency and NFTs.</p>
‍
                <p className='text-md text-white' >Each NFT is a unique 3D artwork generated from the collection of more than 200+ traits. The objective is to build the strongest community and project around NFTs.</p>
                <button className=' text-btnColor border border-btnColor px-5 py-4  rounded-full hover:scale-105 duration-200 md:w-[230px]'>Join discord</button>

            </div>
        </div>
        
    </div>
  )
}

export default About