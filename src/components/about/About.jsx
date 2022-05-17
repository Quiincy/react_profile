import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About-me-img" />
                    </div>
                </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1 Year Experience</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>10+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>7+ Completed Projects</small>
                        </article>
                    </div>

                    <p>I've been learning front-end web development by visiting online courses(cursor.education) for about 5 months.
                        In my study projects I used HTML/CSS/JS to make modern responsible web pages ,as well as preprocessors (Pug, SASS).
                        Also I had to use such popular frameworks as a Bootstrap and even dive a little into the world of the popular JS library “REACT”.
                        I'm looking forward to start writing code and solving different tasks.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About