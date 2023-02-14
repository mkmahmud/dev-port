import React, { useState } from 'react';
import nav from '../../Assets/icons/nav.png';
import cross from '../../Assets/icons/nav-cross.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Navbar.css';

const Navbar = () => {

    // Current Page 
    const [selectedPage, setselectedPage] = useState('home')

    const [mobileMenus, setmobileMenus] = useState(false)

    return (

        <div className='md:flex  '>

            <div className='flex justify-between items-center p-[18px] border-b border-border-bg md:w-2/12'>
                <h2 className='text-text font-[450]'>Mahmudul-Hasan-MK</h2>
                <div className='md:hidden'>
                    {
                        mobileMenus ? <img onClick={() => { setmobileMenus(!mobileMenus) }} src={cross} alt="" /> : <img onClick={() => { setmobileMenus(!mobileMenus) }} src={nav} alt="" />
                    }
                </div>
            </div>


            <div className={`${mobileMenus ? 'block' : 'hidden'} absolute w-full bg-sec-bg h-[90%] flex justify-between flex-col transition`}>
                <ul className=''>
                    <li className='nav-links '><Link to='/'>_Home</Link></li>
                    <li className='nav-links'><Link to='/about'>_About-Me</Link></li>
                    <li className='nav-links'><Link to='/projects'>_Projects</Link></li>
                    <li className='nav-links'><Link to='/'>_Contact-me</Link></li>
                </ul>
            </div>


            <ul className='flex md:w-10/12 hidden md:flex'>
                <li className={`nav-links rounded-Border ${selectedPage === 'home' ? 'navActive' : ''}`}><Link to='/' onClick={() => setselectedPage('home')}>_Home</Link></li>
                <li className={`nav-links rounded-Border ${selectedPage === 'about' ? 'navActive' : ''}`}><Link to='/about' onClick={() => setselectedPage('about')}>_About-Me</Link></li>
                <li className={`nav-links rounded-Border ${selectedPage === 'projects' ? 'navActive' : ''}`}><Link to='/projects' onClick={() => setselectedPage('projects')}>_Projects</Link></li>
                <li className='nav-links rounded-Border'><Link to='/'>_Contact-me</Link></li>
                <li className='nav-links rounded-Border grow text-right'></li>
                <li className='nav-links rounded-Border'><Link to='/'>Resume</Link></li>
            </ul>

        </div>
    );
};

export default Navbar;