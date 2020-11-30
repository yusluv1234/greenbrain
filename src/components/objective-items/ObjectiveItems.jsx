import React from 'react'

import './objectiveItems.css'

const ObjectiveItems = props => {
    return (
        <div className='objective-items'>
            <div className='item-logo'>{props.logo}</div>
            <div className='item-title'>{props.title} <br /></div>
            <div className='item-text'>{props.text}</div>
        </div>
    )
}

export default ObjectiveItems
