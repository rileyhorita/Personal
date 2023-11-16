import React from 'react';
import '../About.css'

import { LuBrainCog } from "react-icons/lu";
import { MdDataExploration } from "react-icons/md";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiDressBold } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { PiGuitar } from "react-icons/pi";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { VscPiano } from "react-icons/vsc";
import { GoPerson } from "react-icons/go";


function About() {
  return (
    <div class='about-page'>
      <div className="head">
        <h1>A little background...</h1>
      </div>
      <div class='row'>
        <div class='box'>
          <p>Hi! I'm Riley. Originally from LA, I currently reside in The Bay as a junior at the University of California, Berkeley. Go Bears!</p>
          <p>Here are some things about me:</p>
          <div class= "contain">
          <img class='about-pic' src="public/rileypic.jpg" />
            <ul class= "list">
              <li class="litems">Age: 20 <GoPerson /></li>
              <li class="litems">Majors: Cognitive science <LuBrainCog /></li>
              <li class="litems">Minors: Data Science <MdDataExploration /></li>
              <li class="litems">Passions: UI/UX, design, art, data science, social good <HiOutlinePaintBrush /> <LiaUserFriendsSolid /></li>
              <li class="litems">Interests: fashion, machine learning, the nature of the mind <PiDressBold /> <FaComputer /></li>
              <li class="litems">Hobbies: Guitar, piano, rubiks cubes, super smash bros, making clothes <PiGuitar /> <MdOutlineVideogameAsset /> <VscPiano /></li>
            </ul>
          </div>
        </div>
      </div>
        <br />
        <br />
        <br />
    </div>
    
  );
}
export default About