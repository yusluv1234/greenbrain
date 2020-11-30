import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';

import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-head'>
                <div className='note'>
                    <span>Lectures Notes</span>
                   <br /><span>Past Questions</span>
                   <br /><span>Project Topics</span>
                </div>
                <div className='about-us'>
                    <span>About Us</span>
                    <br /><span>How it Works</span>
                    <br /><span>FAQs</span>
                </div>
                <div className='contact-us'>
                    <span>Contact Us</span>
                    <br /><span>
                            <h3><img src={TwitterIcon} alt='' /></h3>
                    </span>
                </div>
            </div>
            <div className='copy-right'>&copy;greenbrain2019</div>
        </div>
    )
}

export default Footer;
