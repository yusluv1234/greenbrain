import React from 'react'

import './lecture.css'

const Lecture = () => {
    return (
        <div className='lecture'>
            <div className='lecture-item'>
                <a href='' className='href'>
                    <span className='span-number' 
                    style={{fontSize: '90px', color: 'rgb(254,126,138)', fontWeight: '800'}}>41</span>
                    <br /> <span style={{fontSize: '30px', color: 'black'}}>Lecture Notes</span>
                </a>
                <a href='' className='href'>
                    <span className='span-number' 
                    style={{fontSize: '90px', color: 'rgb(235,201,122)', fontWeight: '800'}}>279</span>
                    <br /> <span style={{fontSize: '30px', color: 'black'}}>Lecture Topics</span>
                </a>
                <a href='' className='href'>
                    <span className='span-number' 
                    style={{fontSize: '90px', color: 'rgb(78,101,50)', fontWeight: '800'}}>217</span>
                    <br /> <span style={{fontSize: '30px', color: 'black'}}>Questions Papers</span>
                </a>
                <a href='' className='href'>
                    <span className='span-number' 
                    style={{fontSize: '90px', color: 'rgb(33,153,136)', fontWeight: '800'}}>214</span>
                    <br /> <span style={{fontSize: '30px', color: 'black'}}>Projects Materials</span>
                </a>
            </div>
        </div>
    )
}

export default Lecture
