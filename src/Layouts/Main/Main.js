import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div className='flex flex-col justify-between md:h-screen w-full'>
          <Navbar></Navbar>  
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;