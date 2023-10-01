import React from 'react'
import Image from '../../assets/avatar-2.svg'
import './About.css'
import AboutBox from './AboutBox'


const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className='about__img'/>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Rishabh Kushwaha, web developer from Delhi, India. I have rich experience in website design and building and customization, also I am good at problem solving.</p>
            <button  className='btn'>Download CV</button>
          </div>


          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front End Development</h3>
                <span className="skills__number ">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Designing</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Sketching</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage sketch"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About