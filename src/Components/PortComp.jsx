import React from 'react';
import './PortComp.css';
    function createPortArticle({heading, description, href , artistImage, second, third}){
        return (
        <div className = "container">
            <img class = "imagesss" src= {artistImage} />
            <div class= "description_div">
                    <a href={href}>
                        <h2 class="heading">{heading}</h2>
                    </a>
                    <ul>
                       <li class="details">{description}</li> 
                       <li class="details">{second}</li>
                       <li class="details">{third}</li>
                    </ul> 
            </div>
        </div>
        )
    }


    export default createPortArticle