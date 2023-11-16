import React from 'react'; 
import PortComp from '../Components/PortComp'; 
import Footer from '../Components/Footer';
import Navbar from '../Navbar';
import DesArticle from '../Components/DesComp';
function PP() {
    return (
      <div>
        <div className = "welcome" > 
        <h1>Portfolio</h1>
        </div>
        <br/>
        <h2 className= "welcome">Projects</h2>
        <div className= "desc">
        <PortComp heading = "Artist Magnet" description = "Non-profit work for Artist Magnet, an organization founded to help aspiring artists expand their audience and further their careers." second= "Redesigned and refigured back and front-end of the website for more efficient user experience" third= "Figma, HTML, CSS, JS, RubyonRails" href = './port' artistImage = "public/artistmag.png"/>
        <PortComp heading = "Journi App" description ="An itinerary generator for any destination input" second="Figma, HTML, CSS, JS, JSX, JSON, APIs" third= "https://planyourjourni.netlify.app/" href = 'https://planyourjourni.netlify.app/' artistImage = "public/journi.png"/>
        <PortComp heading = "Swan Poem" description ="An editorial piece for Gag Magazine" second="A poem written and illustrated by Riley Horita" third= "HTML, CSS" href = './port' artistImage = "public/personal.png"/>
        </div>
        <br/>
        <br/>
        <br />
        <br/>
        <h2 className= "welcome">Design and Art</h2>
        <DesArticle artistImage="public/hiking.png"/>
        <DesArticle artistImage="public/newest.png"/>
        <DesArticle artistImage="public/nana.jpg"/>
        <DesArticle artistImage="public/mary.jpg"/>
        <DesArticle artistImage="public/gore.jpg"/>
        <DesArticle artistImage="public/ok.jpg"/>
        <DesArticle artistImage="public/bleh.jpg"/>
  
        <br />
        <br />
        <br />
      </div>
      
    );
    }

    export default PP