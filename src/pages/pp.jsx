import React from 'react'; 
import PortComp from '../Components/PortComp'; 
import Footer from '../Components/Footer';
import Navbar from '../Navbar';
import DesArticle from '../Components/DesComp';
function PP() {
    return (
      <div>
        <Navbar/>
        <div className = "welcome" > 
        <h1>Portfolio</h1>
        </div>
        <br/>
        <h2 className= "welcome">------ UI/UX Projects ------</h2>
        <div className= "desc">
        <PortComp heading = "Artist Magnet" description = "Non-profit work for Artist Magnet, an organization founded to help aspiring artists expand their audience and further their careers." second= "Redesigned and refigured back and front-end of the website for more efficient user experience" third= "Figma, HTML, CSS, JS, RubyonRails" href = 'https://www.artistmagnet.com/' artistImage = "artistmag.png"/>
        <PortComp heading = "Journi App" description ="An itinerary generator for any destination input" second="Figma, HTML, CSS, JS, JSX, JSON, APIs" third= "https://planyourjourni.netlify.app/" href = 'https://planyourjourni.netlify.app/' artistImage = "journi.png"/>
        <PortComp heading = "A Visual Poem" description ="An editorial piece for Gag Magazine" second="Poem written and illustrated by Riley Horita" third= "HTML, CSS" href = './port' artistImage = "personal.png"/>
        <br/>
        <br/>
        <br />
        <br/>
        <h2 className= "welcome">------ Data Analysis Projects ------</h2>
        <PortComp heading= "Storm Trajectory App" description="Visualize tropical storms in the North Atlantic" second="Fully reactive application with customizable widgets" third="R, Shiny, GGPlot2, UI" href="https://rileyhorita.shinyapps.io/App1/" artistImage="storms.png"/>
        <PortComp heading= "Retirement Contribution Calculator" description="Calculate a retirement fund that lets you see and understand how much money you could accumulate for periodic contributions for a certain number of years, under a given set of assumptions" second="Fully reactive application with customizable widgets" third="R, Shiny, GGPlot2, UI" href=" https://rileyhorita.shinyapps.io/App2/" artistImage="retirement.png"/>
        </div>
        <br/>
        <br/>
        <br />
        <br/>
        <h2 className= "welcome">------ Club Advertisements, Designs, and Personal Projects ------</h2>
        <DesArticle artistImage="cfg1.jpeg"/>
        <DesArticle artistImage="cfg2.jpeg"/>
        <DesArticle artistImage="cfg3.jpeg"/>
        <DesArticle artistImage="hiking.png"/>
        <DesArticle artistImage="newest.png"/>
        <DesArticle artistImage="clinicconnects.png"/>
        <DesArticle artistImage="poshmark.png"/>
        <DesArticle artistImage="rileyredesign.png"/>

        <h2 className= "welcome">------ Art ------</h2>
        <DesArticle artistImage="nana.jpg"/>
        <DesArticle artistImage="mary.jpg"/>
        <DesArticle artistImage="gore.jpg"/>
        <DesArticle artistImage="ok.jpg"/>
        <DesArticle artistImage="bleh.jpg"/>
       
  
        <br />
        <br />
        <br />
      </div>
      
    );
    }

    export default PP