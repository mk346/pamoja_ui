import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
// import "../styles.css";


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>

                <div className="navbar">
                    <div className='flex justify-between items-center h-20 max-w-6xl mx-auto px-2 text-white'>
                        <h1 className='text-3xl font-bold text-orange-500'>Pamoja HomeFibre</h1>
                        <ul className='hidden md:flex space-x-4'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <NavLink to="/Internet">Internet</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Services">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div onClick={handleNav} className='md:hidden'>
                            {nav ? (
                                <AiOutlineClose size={20} className='text-white' />
                            ) : (
                                <AiOutlineMenu size={20} className='text-white' />
                            )}
                        </div>
                    </div>


            </div>
        </>
    );
};

export default Navbar;
