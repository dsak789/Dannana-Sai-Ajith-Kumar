import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
            </p>
        </div>

        <div className='hero-img'>
          <div>
            <div className='tech-icon'>
              <img src='./assets/images/React-icon.svg.png' alt=''/>
            </div>
            <img src='./assets/SBProfile.jpg' alt='DSAK'/>
          </div>

          <div>
            <div className='tech-icon'>
              <img src='./assets/images/html5.png' alt=''/>
            </div>
            <div className='tech-icon'>
              <img src='./assets/images/css3.png' alt=''/>
            </div>
            <div className='tech-icon'>
              <img src='./assets/images/javascript.png' alt=''/>
            </div>
          </div>


        </div>
    </section>
  )
}

export default Hero