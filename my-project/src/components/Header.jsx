import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/images/navbar/logo.svg'
import discord from '../assets/images/navbar/discord.svg'
import instagram from '../assets/images/navbar/instagram.svg'
import twitter from '../assets/images/navbar/twitter.svg'

const Header = () => {
    const [nav, setNav] = useState(false);
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about us' },
        { id: 3, link: 'Roadmap' },
        { id: 4, link: 'Team' },
        { id: 5, link: 'faq' },
    ];

    const toggleMenu = () => {
        setNav(!nav);
    };

    return (
        <nav className='w-full h-28 flex justify-between items-center px-7 md:px-[155px]'>
            <div className=''>
                <img src={logo} alt="logo" size={80}/>
            </div>
            <ul className='hidden md:flex flex-row gap-8 font-semibold'>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className='px-4 cursor-pointer text-[20px] text-gray-300 font-semibold capitalize hover:scale-105 duration-200'
                    >
                        {link}
                    </li>
                ))}
            </ul>
            <div className='hidden md:flex md:flex-row md:gap-5 '>
                <div className='flex flex-row gap-2'>
                    <a href="#">
                    <img src={discord} alt="" />
                    </a>
                    <a href="#">
                    <img src={twitter} alt="" />
                    </a>
                    <a href="#">
                    <img src={instagram} alt="" />
                    </a>
                </div>
                <div>
                <button className='bg-btnColor text-white font-semibold px-5 py-4 rounded-2xl hover:scale-105 duration-200'>Buy an Alien</button>
                </div>
            </div>

            <div className='md:hidden block cursor-pointer pr-4 z-10 text-btnColor' onClick={toggleMenu}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen
                    bg-indigo-200'>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className='px-4 py-6 cursor-pointer font-bold  capitalize hover:scale-105 duration-200'
                        >
                            {link}
                        </li>

                    ))}
                    <li>
                        <button className='bg-btnColor text-white  font-semibold p-2 rounded-2xl hover:scale-105 duration-200'>Buy an alien</button>
                    </li>
                </ul>

            )}
        </nav>
    );
}

export default Header;
