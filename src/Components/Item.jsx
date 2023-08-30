import React from 'react'
import './Item.css'

const Item = ({ title, text, background, slider }) => {
  return (
    <div className='item' style={{backgroundImage: `url(${background})`}}>
        <div className='itemContainer'>
            <div className='itemText'>
                <h1 className='adoptChallengeText'>{title}</h1>
                {slider?slider:<div className='storyText'>{text}</div>}
            </div>
        </div>
    </div>
  )
}

export default Item