import React from 'react';
import ObjectiveItems from '../objective-items/ObjectiveItems';
import Books from '../../assets/books.png'
import Moneys from '../../assets/money-bag.png'
import Calenders from '../../assets/calendar.png'
import Networks from '../../assets/network.png'

import './objective.css';

function Objective() {

    const Book = <img src={Books} alt='books' />
    const Money = <img src={Moneys} alt='moneys' />
    const Calender = <img src={Calenders} alt='calenders' />
    const Network = <img src={Networks} alt='networks' />

    return (
        <div className='objective'>
            <div className='object_items'>
            <ObjectiveItems logo={Book}
                title='Free access to quality learning 
                materials'
                text='Our main priority is to make learning 
                materials accessible for students in 
                Nigerian Univeristies. This covers
                 lecture notes/ handouts and exam 
                 past question papers as well as 
                 project topics and materials.'
            />
            <ObjectiveItems logo={Calender}
                title='Stay organised while on campus'
                text='Save your lecture and personal study timetables online for convenient access. 
                Safely store your academic results for private access and 
                automatically generate your GPA for the semester.'
            />
            <ObjectiveItems logo={Network}
                title='Create your network while still in school'
                text='Connect, interact, and collaborate with people studying 
                the same course as you in other Universities in Nigeria.'
            />
            <ObjectiveItems logo={Money}
                title='Make money while you’re at it'
                text='Upload project materials and get 50% of the sum each time it is downloaded. 
                Uploading more projects increases your chance of earning more money.'
            />
            
            </div>
        </div>
    )
}

export default Objective;
