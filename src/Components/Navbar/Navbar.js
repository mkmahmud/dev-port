import React, { useState } from 'react';
import nav from '../../Assets/icons/nav.png';
import cross from '../../Assets/icons/nav-cross.png';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/logo.png';

const Navbar = () => {



    const [mobileMenus, setmobileMenus] = useState(false)


    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (

        <div className='md:flex  '>

            <div className='flex justify-between items-center p-[18px] border-b border-border-bg md:w-2/12'>
                <h2 className='text-text font-[450] flex items-center'><img src={logo} className='h-6 w-6 mx-2' alt="" /> Mahmudul Hasan MK</h2>
                <div className='md:hidden'>
                    {
                        mobileMenus ? <img onClick={() => { setmobileMenus(!mobileMenus) }} src={cross} alt="" /> : <img onClick={() => { setmobileMenus(!mobileMenus) }} src={nav} alt="" />
                    }
                </div>
            </div>


            <div className={`${mobileMenus ? 'block' : 'hidden'} absolute w-full bg-sec-bg h-[90%] flex justify-between flex-col transition z-10` }>
                <ul className=''>
                    <li className='nav-links '><Link to='/'>_Home</Link></li>
                    <li className='nav-links'><Link to='/about'>_About-Me</Link></li>
                    <li className='nav-links'><Link to='/projects'>_Projects</Link></li>
                    <li className='nav-links'><Link to='/skills'>_Skills</Link></li>
                    <li className='nav-links'><Link to='/'>_Contact-me</Link></li>
                </ul>
            </div>


            <ul className='flex md:w-10/12 hidden md:flex'>
                <li className={`nav-links rounded-Border ${isActive('/') ? 'navActive' : ''}`}><Link to='/'>_Home</Link></li>
                <li className={`nav-links rounded-Border ${isActive('/about')  ? 'navActive' : ''}`}><Link to='/about'>_About-Me</Link></li>
                <li className={`nav-links rounded-Border ${isActive('/projects') ? 'navActive' : ''}`}><Link to='/projects'>_Projects</Link></li>
                <li className={`nav-links rounded-Border ${isActive('/skills') ? 'navActive' : ''}`}><Link to='/skills'>_Skills</Link></li>
                <li className={`nav-links rounded-Border ${isActive('/contact') ? 'navActive' : ''}`}><Link to='/contact'>_Contact-me</Link></li>
                <li className='nav-links rounded-Border grow text-right'></li>
                <li className={`nav-links rounded-Border ${isActive('/resume') ? 'navActive' : ''}`}><Link to='/resume'>_Resume</Link></li>
            </ul>

        </div>
    );
};

export default Navbar;