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
        <h2 className= "welcome">------ UI/UX Projects ------</h2>
        <div className= "desc">
        <PortComp heading = "Artist Magnet" description = "Non-profit work for Artist Magnet, an organization founded to help aspiring artists expand their audience and further their careers." second= "Redesigned and refigured back and front-end of the website for more efficient user experience" third= "Figma, HTML, CSS, JS, RubyonRails" href = './port' artistImage = "public/artistmag.png"/>
        <PortComp heading = "Journi App" description ="An itinerary generator for any destination input" second="Figma, HTML, CSS, JS, JSX, JSON, APIs" third= "https://planyourjourni.netlify.app/" href = 'https://planyourjourni.netlify.app/' artistImage = "public/journi.png"/>
        <PortComp heading = "A Visual Poem" description ="An editorial piece for Gag Magazine" second="Poem written and illustrated by Riley Horita" third= "HTML, CSS" href = './port' artistImage = "public/personal.png"/>
        <br/>
        <br/>
        <br />
        <br/>
        <h2 className= "welcome">------ Data Analysis Projects ------</h2>
        <PortComp heading= "Storm Trajectory App" description="Visualize tropical storms in the North Atlantic" second="Fully reactive application with customizable widgets" third="R, Shiny, GGPlot2, UI" href="https://rileyhorita.shinyapps.io/App1/" artistImage="public/storms.png"/>
        <PortComp heading= "Retirement Contribution Calculator" description="Calculate a retirement fund that lets you see and understand how much money you could accumulate for periodic contributions for a certain number of years, under a given set of assumptions" second="Fully reactive application with customizable widgets" third="R, Shiny, GGPlot2, UI" href=" https://rileyhorita.shinyapps.io/App2/" artistImage="public/retirement.png"/>
        </div>
        <br/>
        <br/>
        <br />
        <br/>
        <h2 className= "welcome">------ Design and Art ------</h2>
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