import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=""/>  
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a skilled software engineer and full-stack developer with experience in creating both web and mobile applications. Proficient in front-end and back-end technologies, I focus on building intuitive, efficient, and scalable solutions that deliver seamless user experiences.</p>
                    <p>With a strong foundation in modern frameworks and development best practices, I bring a detail-oriented approach to every project. I’m passionate about continuous learning and always seek to enhance my skill set to keep pace with industry advancements and exceed client expectations.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Flutter</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>3+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About