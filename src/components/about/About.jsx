import React from 'react'
import Image from '../../assets/avatar-2.svg'


const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className='about__img'/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Rishabh Kushwaha, web developer from Delhi, India. I have rich experience in website design and building and customization, also I am good at problem solving.</p>
            <a href="" className='btn'>Download CV</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skill__name">Development</h3>
                <span className="skill__number">90%</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About