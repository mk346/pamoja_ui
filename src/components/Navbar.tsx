import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-orange-500'>Pamoja HomeFibre</h1>
            <ul className=' bnb hidden md:flex'>
                <li className='p-4'>
                    <Link to="/">Home</Link></li>
                <li className='p-4'>
                    <NavLink to="/Internet">Internet</NavLink></li>
                <li className='p-4'>
                    <NavLink to="/Services">Services</NavLink></li>
                <li className='p-4'>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-orange-500 m-4'>Pamoja HomeFibre.</h1>
                <li className='p-4 border-b border-gray-600'>
                    <Link to="/">Home</Link></li>
                <li className='p-4 border-b border-gray-600'>
                    <Link to="/Internet">Internet</Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                    <Link to="/Services">Services</Link></li>
                <li className='p-4 border-b border-gray-600'>
                    <Link to="/Contact">Contact</Link></li>


            </ul>
        </div>
    );
};

export default Navbar;