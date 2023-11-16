import React from 'react';
import Navbar from '../Navbar.jsx';
import './BlogPage.css';

// {category, title, subtitle, image, caption, date, content, dateWritten, blogContent}

function BlogPage({ blogPageData }) {
    const paragraphs = blogPageData.blogContent.split('\n');
    return (
        <div className='blog-page'>
            <div className='title-section'>
                <h4 className='category'>{blogPageData.category}</h4>
                <h1 className='title'>{blogPageData.title}</h1>
                <h2 className='subtitle'>{blogPageData.subtitle}</h2>
                <img className='blog-page-image' src={blogPageData.image} alt="" />
                <p className='blog-body'>{blogPageData.caption}</p>
            </div>

            <div class='date-section'>
                <p className='author'>By {blogPageData.name}</p>
                <p className='date'>{blogPageData.dateWritten}</p>
            </div>

            <div class='blog-content-section'>
                {paragraphs.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    )
}

export default BlogPage