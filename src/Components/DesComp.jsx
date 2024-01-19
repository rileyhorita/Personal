import React from 'react';
import './DesComp.css';
    function DesArticle({ artistImage}){
        return (
        <div className = "contained">
            <img class = "imagess" src= {artistImage} />
        </div>
        )
    }


    export default DesArticle