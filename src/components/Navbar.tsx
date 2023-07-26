import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/pamojalogo.png";
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
                    <Link to="/">
                        <img src={logo} alt="Pamoja HomeFibre" className="w-40 h-auto" />
                    </Link>
                    <ul className={`md:flex space-x-4 ${nav ? 'block' : 'hidden'}`}>
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
