import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'm Mathuwanthi Navakumar,</span> frontend developer based in Sri Lanka.</h1>
        <p>I am a frontend developer from Sri Lanka , with 10 years of experience in multiple companies like Microsoft,Tesla and Apple.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero