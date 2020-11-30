import React from 'react';

import './customButton.css';

const CustomButton = props => {
    return (
        <div className='custom-button'>
            <a  href="/lecturenotes" className='button-title'>{props.name}</a>
        </div>
    )
}

export default CustomButton;
