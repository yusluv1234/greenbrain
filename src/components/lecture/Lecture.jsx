import React from 'react'

import './lecture.css'

const Lecture = () => {
    return (
        <div className='lecture'>
            <div className='lecture-item'>
                <a href='' className='href'>
                    <span className='span-number' 
                    >41</span>
                    <br /> <span style={{fontSize: '20px', color: 'black'}}>Lecture Notes</span>
                </a>
                <a href='' className='href'>
                    <span className='span-number' 
                    >279</span>
                    <br /> <span style={{fontSize: '20px', color: 'black'}}>Lecture Topics</span>
                </a>
                <a href='' className='href'>
                    <span className='span-number' 
                    >217</span>
                    <br /> <span style={{fontSize: '20px', color: 'black'}}>Questions Papers</span>
                </a>
                <a href='' className='href'>
                    <span className='span-number' 
                    >214</span>
                    <br /> <span style={{fontSize: '20px', color: 'black'}}>Projects Materials</span>
                </a>
            </div>
        </div>
    )
}

export default Lecture
