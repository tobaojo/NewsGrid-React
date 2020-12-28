import React from 'react'
import showcaseImg from '../img/featured.jpg'

const Showcase = () => {
    return (
    
        <div id="showcase">
            <div style={{backgroundImage:`url(${showcaseImg})`}} id="overlay"></div>
      <div className="container">
        <div className="showcase-container">
          <div className="showcase-content">
            <div className="category category-sports">sports</div>
            <h1>Headline: Kevin Stefanski optimistic about Odell Beckham Jr.'s 2020 season</h1>
            <p>By his standards, Odell Beckham Jr. did not have the 2019 season he envisioned...</p>
            <a href="article.html" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        </div>
       
    )
}

export default Showcase
