import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import {FaAward} from 'react-icons/fa';
import {BsBuildings} from 'react-icons/bs';
import {VscFolderLibrary} from 'react-icons/vsc';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 Months Internship</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

            <article className='about__card'>
              <BsBuildings className='about__icon'/>
              <h5>Company</h5>
              <small>01 worked</small>
            </article>
          </div>

          <p>
            Hello, I'm Wee Kiat, a passionate 23-year-old Malaysian with a knack for technology and exploration. 
            Currently based in Singapore, I recently graduated with a BSc in Computer Science, specializing in Artificial Intelligence and Machine Learning, from the University of London - Singapore Institute of Management. 
            My journey has been fueled by a deep curiosity for the digital realm and an unquenchable thirst for knowledge.<br /><br />
            My programming toolkit includes HTML, CSS, JavaScript, ReactJS, Python, Django, MySQL, and SQLite. 
            These skills have empowered me to create dynamic and responsive web applications, and I'm excited to continue growing as an entry-level Software Engineer.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About