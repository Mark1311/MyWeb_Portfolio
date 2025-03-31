import React from "react";
import Navbar from "./NavBar";
import Blog01 from '../img/blog-1.jpg'
import Blog02 from '../img/blog-2.jpg';
import Blog03 from '../img/blog-3.jpg';
import Blog04 from '../img/blog-4.jpg'
import Blog05 from '../img/blog-5.jpg'
import Blog06 from '../img/blog-6.jpg'


function Blog(){
    return(<>
    <div className="main-content">
       <Navbar/>
        
        <article className="blog active" data-page="blog">

        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">

          <ul className="blog-posts-list">

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                  <img src={Blog01} alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design conferences in 2022</h3>

                  <p className="blog-text">
                    Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                  </p>

                </div>

              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                <img src={Blog02} alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Best fonts every designer</h3>

                  <p className="blog-text">
                    Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                  </p>

                </div>

              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                <img src={Blog03} alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design digest #80</h3>

                  <p className="blog-text">
                    Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
                  </p>

                </div>

              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                <img src={Blog04} alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">UI interactions of the week</h3>

                  <p className="blog-text">
                    Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
                  </p>

                </div>

              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                <img src={Blog05} alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">The forgotten art of spacing</h3>

                  <p className="blog-text">
                    Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                </div>

              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                <img src={Blog06} alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design digest #79</h3>

                  <p className="blog-text">
                    Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                  </p>

                </div>

              </a>
            </li>

          </ul>

        </section>

      </article>
      </div>
    
    </>)
}

export default Blog