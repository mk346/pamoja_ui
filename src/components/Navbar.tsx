import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/pamojalogo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="Pamoja HomeFibre" className="w-32 h-auto" />
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex'>
                    <NavLink to="/" className='p-4'>Home</NavLink>
                    <NavLink to="/Internet" className='p-4'>Internet</NavLink>
                    <NavLink to="/Services" className='p-4'>Services</NavLink>
                    <NavLink to="/Contact" className='p-4'>Contact</NavLink>
                </ul>

                {/* Mobile Navigation */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <li>
                        <Link to="/">
                            <img src={logo} alt="Pamoja HomeFibre" className="w-32 h-auto" />
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/" className='p-4 border-b border-gray-600'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Internet" className='p-4 border-b border-gray-600'>Internet</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services" className='p-4 border-b border-gray-600'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className='p-4 border-b border-gray-600'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
 