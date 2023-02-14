import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../Assets/icons/social/github.png';
import twitter from '../../Assets/icons/social/twiter.png';
import facebook from '../../Assets/icons/social/facebook.png';

const Footer = () => {
    return (
        <div className='border-t border-b border-border-bg '>
            <div className=' flex  items-center'>
                <h2 className='text-text text-left pl-[18px] font-[450] pr-4 md:w-2/12'>find me in:</h2>
                <ul className='flex md:w-10/12'>
                    <li className='footer-links border-x'><Link to='/'><img src={twitter} alt="" /></Link></li>
                    <li className='footer-links border-x'><Link to='/'><img src={facebook} alt="" /></Link></li>
                    <li className='footer-links border-x grow'></li>
                    <li className='footer-links '><Link to='/' className='flex justify-end'><span className='hidden md:block px-2'>@mkmahmud</span> <img src={github} alt="" /></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;