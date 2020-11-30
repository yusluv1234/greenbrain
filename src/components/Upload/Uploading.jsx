import React from 'react'
import Collections from '../../assets/collection_box.png';
import CustomButton from '../custom-button/CustomButton';

import './uploading.css'

function Uploading() {
    
    return (
        <div className='uploading'>
            <div className='uploading-icon'>
                <img src={Collections} alt='collections' />
            </div>
            <div className='uploading-text'>
               Improve your school life, 
               <br />make money by uploading project 
               <br />materials

            </div>
            <div className='uploading-button'>
            <CustomButton name='Start Here' />
            </div>
        </div>
    )
}

export default Uploading
