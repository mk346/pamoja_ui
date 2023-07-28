// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

//
// const Navbar = () => {
//     const [nav, setNav] = useState(false);
//
//     const handleNav = () => {
//         setNav(!nav);
//     };
//
//     return (
//         <>
//             <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//                 {/* Logo */}
//                 <Link to="/">
//                     <img src={logo} alt="Pamoja HomeFibre" className="w-32 h-auto" />
//                 </Link>
//
//                 {/* Desktop Navigation */}
//                 <ul className='hidden md:flex'>
//                     <NavLink to="/" className='p-4'>Home</NavLink>
//                     <NavLink to="/Internet" className='p-4'>Internet</NavLink>
//                     <NavLink to="/Services" className='p-4'>Services</NavLink>
//                     <NavLink to="/Contact" className='p-4'>Contact</NavLink>
//                 </ul>
//
//                 {/* Mobile Navigation */}
//                 <div onClick={handleNav} className='block md:hidden'>
//                     {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//                 </div>
//
//                 <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//                     <li>
//                         <Link to="/">
//                             <img src={logo} alt="Pamoja HomeFibre" className="w-32 h-auto" />
//                         </Link>
//                     </li>
//                     <li>
//                         <NavLink to="/" className='p-4 border-b border-gray-600'>Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/Internet" className='p-4 border-b border-gray-600'>Internet</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/Services" className='p-4 border-b border-gray-600'>Services</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/Contact" className='p-4 border-b border-gray-600'>Contact</NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </>
//     );
// };
//
// export default Navbar;
import React, { useState } from "react";
import { ReactNode } from "react";
import logo from "../assets/pamojalogo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex items-center w-full bg-transparent">
            <div className="container">
                <div className="relative flex items-center justify-between -mx-4">
                    <div className="max-w-full px-4 w-60">
                        <a href="/#" className="block w-full py-5">
                            <img src={logo} alt="logo" className="w-full" />
                        </a>
                    </div>
                    <div className="flex items-end justify-between w-full px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={`${
                                    open ? "navbarTogglerActive" : ""
                                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-white focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-orange-500"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-orange-500"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-orange-500"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-black py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                                    open ? "block" : "hidden" // Show the Navbar if open is true, otherwise hide it
                                } `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem
                                        navItemStyles="text-dark hover:text-orange-500"
                                        NavLink="/"
                                    >
                                        Home
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-orange-500"
                                        NavLink="/Internet"
                                    >
                                        Internet
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-orange-500"
                                        NavLink="/Services"
                                    >
                                        Services
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-orange-500"
                                        NavLink="/Contact"
                                    >
                                        Contact
                                    </ListItem>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

interface ListItemProps {
    navItemStyles: string;
    NavLink: string;
    children: ReactNode; // Define children prop with ReactNode type
}

const ListItem: React.FC<ListItemProps> = ({
                                               children,
                                               navItemStyles,
                                               NavLink,
                                           }) => {
    return (
        <li>
            <a
                href={NavLink}
                className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
            >
                {children}
            </a>
        </li>
    );
};
