import React from 'react';
import '../About.css';
import { Link } from "react-router-dom";
import Navbar from '../Navbar';

function About() {
  return (
    <>
    <div className="all">
      <div className='about-page'>
      <div className="navwrapper">
        <Navbar />
        </div>
          <div className='content'>
            <h1 className='name'>Riley Horita</h1>
            <div class="marquee">
            <div class="marquee-content">
            Welcome to my website! I am currently a senior at the University of California, Berkeley. I am an aspiring web and UIUX developer, but my passion for both stems from a blend of love for both creative and technical challenges. I enjoy crafting visually appealing and user-friendly digital experiences that solve real-world problems. I am also very interested in Data Science and the nature of the mind. Thank you for visiting my site! 
          </div>
          </div>
          </div>
          </div>
          <div className='second-background'>
            <div className='secondcontent'>
              <p className="p1">Some of my hobbies include drawing, interior design, collecting trinkets, playing basketball, and creating whatever I can with what I have.</p>
              <p className="p2">I love to spend time in nature, and draw inspiration from the small things around me. While my personal style presents a more monotonous and avant garde flair, my artwork is largely based on early internet culture and the whimsical essence of my youth. </p>
            </div>
          </div>
          <div className='third-background'>
            <div className='thirdcontent'>
              <div className="portwrapper">
              <img className="Portfolioname" src='/portfolioname.png' alt='Portfolioname' />
              </div>
            <div className="threepics">
              <Link to='/home'> <img className="clickableimages" src='/blog.png' alt='Blog' /></Link>
              <Link to='/pp'><img className="clickableimages" src='/projects.png' alt='Projects' /></Link>
              <Link to='/pp'><img className="clickableimages" src='/artwork.png' alt='Artwork' /></Link>
              </div>
            <div className="descwrapper">
              <h2 className="desc">Blog</h2>
              <h2 className="desc">Projects</h2>
              <h2 className="desc">Artwork</h2>
              </div>
            </div>
          </div>
          </div>
    </>
  );
}

export default About;
