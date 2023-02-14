import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <Link className='px-3.5 py-2.5 bg-button rounded-lg m-2' to='/'>Button</Link>
    );
};

export default Button;