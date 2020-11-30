import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import Hero from '../../assets/hero_image.png';

import './about.css';

const About = () => {
    return (
        <div className='about'>
            <div className='heading'>
                <h1>
                We connect University
                <br />students with their most
                <br /> important needs.
                </h1>
                <ul>
                    <div className='doneicon'>
                        <div><DoneIcon style={{ color: 'red', marginRight: '1.2rem' }} /></div>
                        <div className='text-'>Lecture notes and handouts from <br /> all Nigerian Universities</div>
                    </div>
                    <div className='doneicon'>
                        <div><DoneIcon style={{ color: 'red', marginRight: '1.2rem' }} /></div>
                        <div className='text-'>Lecture notes and handouts from <br /> all Nigerian Universities</div>
                    </div>
                    <div className='doneicon'>
                        <div><DoneIcon style={{ color: 'red', marginRight: '1.2rem' }} /></div>
                        <div className='text-'>Exam past questions from any <br /> Exam past questions from any</div>
                    </div>
                    <div className='doneicon'>
                        <div><DoneIcon style={{ color: 'red', marginRight: '1.2rem' }} /></div>
                        <div className='text-'>Project topics and materials in <br /> any course</div>
                    </div>
                    <div className='doneicon'>
                        <div><DoneIcon style={{ color: 'red', marginRight: '1.2rem' }} /></div>
                        <div className='text-'>Grow your network: Connect with <br />  Students from other Univeristies Start Here</div>
                    </div>
                </ul>
            </div>
                <div className='book-'>
                    <img src={Hero} className='hero-image' alt='hero' />
                </div>

        </div>
    )
}

export default About;
