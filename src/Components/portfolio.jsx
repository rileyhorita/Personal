
import React from 'react';
import './portfolio.css';

// {category, title, subtitle, image, caption, date, content, dateWritten, blogContent}

function PortfolioPage({ portfolioPageData }) {
    const paragraphs = portfolioPageData.portContent.split('\n');
    return (
        <div className='port-page'>
            <div className='title-section'>
                <h4 className='category'>{portfolioPageData.category}</h4>
                <h1 className='title'>{portfolioPageData.title}</h1>
                <h2 className='subtitle'>{portfolioPageData.subtitle}</h2>
                <img className='blog-page-image' src={portfolioPageData.image} alt="" />
                <p className='blog-body'>{portfolioPageData.caption}</p>
            </div>

            <div class='date-section'>
                <p className='author'>By {portfolioPageData.name}</p>
                <p className='date'>{portfolioPageData.dateWritten}</p>
            </div>

            <div class='blog-content-section'>
                {paragraphs.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    )
}

export default PortfolioPage