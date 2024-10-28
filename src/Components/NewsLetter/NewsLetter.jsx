import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>
        Get exclusive offers on your email
      </h1>
      <p>Subscribe to our Newsletter and stay updated </p>
      <div>
        <input type="email" placeholder='your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
