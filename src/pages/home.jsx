import React from 'react'; 
import Navbar from '../Navbar';
import ArticleComp from '../Components/ArticleComp'; 
import Footer from '../Components/Footer';
function Home() {
    return (
      <div>
        <div className = "welcome" > 
        <h1>Check out my blog...</h1>
        </div>
        <p className= "welcome">Articles</p>
        <ArticleComp heading = "Childish Gambino The Goat" description = " This article is about the artist Childish Gambino. Childish Gambino, the creative alter ego of multi-talented artist Donald Glover, seamlessly combines music, comedy, and thought-provoking social commentary in his work." href = './calvin' artistImage = "public/childish_gambino.jpg"/>
        <ArticleComp heading = "Bladee" description = "Bladee, the genre-bending Swedish artist, has left an indelible mark in the underground music scene, inspiring a new wave of boundary-pushing musicians." href = './riley' artistImage = "public/blade.jpg"/>
        <ArticleComp heading = "William Nguyen" description = "This article explores how Nintendo has been a constant presence, shaping the author's life through lessons in resilience, community building, and creative thinking. From early adventures in Zelda to epic multiplayer battles in Smash Bros, Nintendo has left an indelible mark on their childhood. Nintendo's unique blend of fantasy and innovation has enriched their life, showing that the world of imagination knows no bounds." href = './will' artistImage = "public/mario.png"/>
        <br />
        <br />
        <br />
      </div>
      
    );
    }

    export default Home