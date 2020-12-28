import React from 'react';
import '../App.css';
import ent1 from '../img/articles/ent1.jpg';
import ent2 from '../img/articles/ent2.jpg';
import sports1 from '../img/articles/sports1.jpg';
import tech1 from '../img/articles/tech1.jpg';
import tech2 from '../img/articles/tech2.jpg';

const ShowcaseContent = () => {
    return (
        <div id="home-articles" className="py-2">
            <div className='container'>
            <h2>Editor Picks</h2>
            <div className='articles-container'>
            <article className="card">
            <img src={ent1} alt="entertainment"/>
            <div className="">
              <div className="category category-ent">Entertainment</div>
              <h3>
                  <a href="article.html">Phil Anselmo weighs in on the greatest vocalist of all time.</a>
              </h3>
              <p>And it wasn't an easy choice...</p>
            </div>
          </article>
          <article class="card bg-dark">
              <div class="category category-sports">Sports</div>
              <h3>
                  <a href="article.html">Mercedes see positives in signing Vettel as it's suggested he can win F1 title No.5</a>
              </h3>
              <p>Mercedes boss Toto Wolff accepts there would be positives in signing Sebastian Vettel for 2021.</p>
          </article>
          <article class="card">
            <img src={tech1} alt="tech"/>
              <div class="category category-tech">Technology</div>
              <h3>
                  <a href="article.html">Tech Article</a>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
          </article>
          <article class="card">
              <div class="category category-sports">Sports</div>
              <h3>
                  <a href="article.html">Sports Article 3</a>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
                <img src={sports1} alt="sports1"/>
          </article>
          <article class="card">
            <img src={tech2}alt="tech"/>
              <div class="category category-tech">Technology</div>
              <h3>
                  <a href="article.html">Tech Article 2</a>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
          </article>
          <article class="card bg-primary">
              <div class="category category-sports">Sports</div>
              <h3>
                  <a href="article.html">Sports Article 3</a>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
          </article>
          <article class="card">
            <div class="">
              <div class="category category-ent">Entertainment</div>
              <h3>
                  <a href="article.html">Entertainment Article 2</a>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
            </div>
            <img src={ent2} alt="entertainment"/>
          </article>
            </div>
            </div>
           
        </div>
    )
}

export default ShowcaseContent
