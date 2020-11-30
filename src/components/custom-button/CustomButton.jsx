import React from 'react';

import './customButton.css';

const CustomButton = props => {
    return (
        <div className='custom-button'>
            <div className='button-title'>{props.name}</div>
        </div>
    )
}

export default CustomButton;
