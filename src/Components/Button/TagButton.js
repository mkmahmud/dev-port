import React from 'react';

const TagButton = ({text}) => {
    return (
        <button className='border border-button px-3.5 py-2.5 rounded-lg text-sm mx-2 my-2' >{text}</button>
    );
};

export default TagButton;