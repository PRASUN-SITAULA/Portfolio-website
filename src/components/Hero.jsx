import React from 'react'
import './styles/hero.css'
import profile from '../assets/images/profile.jpg'



export default function Hero() {
  return (
    <div className="hero-banner">
      <div>
        <div className='info-text'>
          <p>Hello, My name is</p>
          <p className='my-name'>Prasun Sitaula</p>
          <p>I am a Fullstack Developer</p>
        </div>
        <div className='profile-image'>
          <img src={profile} alt='profile-picture'/>
        </div>
        
      </div>
        
    </div>
  )
}
