import React from 'react'
import main from '../assets/images/home/centerimg.png'
import left from '../assets/images/home/leftimg.png'
import right from '../assets/images/home/rightimg.png'
const Home = () => {
  return (
    <div className='bg-gradient-to-b from-transparent to-slate-950 opacity-85'>
        <div className='relative z-1 flex flex-row w-full px-48 '  style={{ height: 'calc(100vh - 112px )' }}>
        {/* absolute */}
        <div className='flex items-center w-[416px] z-1'>
            <img src={left} alt="" className="w-80  ml-[8rem] mt-[12rem]" />
        </div>
        <div className='flex items-center w-[631px] z-10'>
            <img src={main} alt=""  className="w-full h-full "/>
        </div>
        <div className='flex justify-center items-center w-[416px] z-1'>
            <img src={right} alt="" className="w-80  mr-[15rem] mt-[13rem]" />
        </div>
        </div>
         <div className='bg-gradient-to-b from-transparent to-slate-950 z-2 absolute w-full h-[86%] top-[6rem]'>
        <div className='flex flex-col gap-5 justify-center items-center w-full z-10 absolute top-[17rem] ' >
        {/* relative top-[16rem] */}
            <span className='text-white text-[50px]'>Next Biggest Expedition in the world </span>
            <span className='text-white text-[50px]'>Aliens Travelling and Pleanet</span>
            <button className='bg-btnColor text-white font-semibold px-7 py-4 rounded-full hover:scale-105 duration-200'>
                Discover Alien
            </button>
        
        </div>
        </div>
    </div>
  )
}

export default Home