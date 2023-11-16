import React from 'react';
import './articleComp.css';
    function createArticle({heading, description, href , artistImage}){
        return (
        <div className = "container">
            <img class = "imagesss" src= {artistImage} />
            <div class= "description_div">
                    <h3 className = "date" > Jan 1 2023 </h3>
                    <a href={href}>
                        <h1>{heading}</h1>
                    </a>
                    <h2> {description} </h2> 
            </div>
        </div>
        )
    }

export default createArticle