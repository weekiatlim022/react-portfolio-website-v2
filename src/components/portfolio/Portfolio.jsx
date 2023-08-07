import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
import IMG7 from '../../assets/portfolio7.png';
import IMG8 from '../../assets/portfolio8.png';
import IMG9 from '../../assets/portfolio9.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Portfolio Website-V2',
    description: {
      title: 'A dynamic portfolio website using ReactJS to showcase personal projects and skills. I have incorporated responsive design principles to ensure optimal user experience on various devices.',
      techniques: 'Techniques used: HTML + CSS + JS + ReactJS'
    },
    github: 'https://github.com/weekiatlim022/react-portfolio-website-v2',
    demo: 'https://weekiatlim022.github.io/react-portfolio-website-v2'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Weather App',
    description: {
      title: 'This is a weather app developed using ReactJS that allows users to search for cities and view the current weather as well as a 7-day forecast.',
      techniques: 'Techniques used: HTML + CSS + JS + ReactJS'
    },
    github: 'https://github.com/weekiatlim022/weather-app',
    demo: 'https://weather-with-cities.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'To Do List App',
    description: {
      title: 'This is a simple To-Do List app built using ReactJS. The app allows users to add, edit, and delete tasks, as well as mark tasks as completed.',
      techniques: 'Techniques used: HTML + CSS + JS + ReactJS'
    },
    github: 'https://github.com/weekiatlim022/To-Do-List-App',
    demo: 'https://weekiatlim022.github.io/To-Do-List-App/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Personal Portfolio Website-V1',
    description: {
      title: 'A personal portfolio website completed with the help of some online tutorial guides.',
      techniques: 'Techniques used: HTML + CSS + JS'
    },
    github: 'https://github.com/weekiatlim022/portfolio_website',
    demo: 'https://weekiatlim022.github.io/portfolio_website/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Fake News Detection',
    description: {
      title: 'Developed a system for detecting fake news that can recognize and categorize articles based on their text to decide whether they are real or fake. ',
      techniques: 'Techniques used: Jupyter Notebook, Python, NLTK, Scikit-learn, Machine Learning, Deep Learning'
    },
    github: 'https://github.com/weekiatlim022/Final-Project',
    demo: 'https://github.com/weekiatlim022/Final-Project'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Traffic Monitoring System',
    description: {
      title: 'An application for detecting and tracking moving cars from a camera recording videos. This application must run on a Jupyter Notebook written in Python and use the OpenCV library.',
      techniques: 'Techniques used: Jupyter Notebook, Python, OpenCV, Frame Differencing, Background Subtraction'
    },
    github: 'https://github.com/weekiatlim022/Traffic-Monitoring-System',
    demo: 'https://github.com/weekiatlim022/Traffic-Monitoring-System'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Social Network Application',
    description: {
      title: 'Developed a social network web application with some functions which are communicating with each other, registering accounts, login accounts, search functions, adding friends, post status, and so on.',
      techniques: 'Techniques used: HTML, CSS, JS, Python, Django, SQLite'
    },
    github: 'https://github.com/weekiatlim022/Social-Network-Application',
    demo: 'https://github.com/weekiatlim022/Social-Network-Application'
  },
  {
    id: 8,
    image: IMG8,
    title: 'SpaceUs',
    description: {
      title: 'This group project is to create an application that helps students find good study spaces, share their favourite study spaces, and find people with the same or similar subjects/fields to study with.',
      techniques: 'Techniques used: Andriod Studio, Kotlin, Figma, Firebase'
    },
    github: 'https://github.com/weekiatlim022/SpaceUs',
    demo: 'https://github.com/weekiatlim022/SpaceUs'
  },
  {
    id: 9,
    image: IMG9,
    title: 'MNIST digits Classification',
    description: {
      title: 'Created a neural network for identifying numbers based on handwritten digits. For example, when the input to the network is an image of a handwritten number 9, the corresponding prediction must also be the digit 9.',
      techniques: 'Techniques used: Python, Machine Learning, Neural Network'
    },
    github: 'https://github.com/weekiatlim022/MNIST-Digits-Classification',
    demo: 'https://github.com/weekiatlim022/MNIST-Digits-Classification'
  }
];


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p className='description'>{description.title} <br/><br /> {description.techniques}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default Portfolio