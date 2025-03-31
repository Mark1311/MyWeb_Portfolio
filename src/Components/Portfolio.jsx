import React, { useEffect } from "react";
import Navbar from "./NavBar";
import pojt01 from '../img/project-1.jpg';
import pojt02 from '../img/project-2.png';
import pojt03 from '../img/project-3.jpg';
import pojt04 from '../img/project-4.png';
import pojt05 from '../img/project-5.png';
import pojt06 from '../img/project-6.png';
import pojt07 from '../img/project-7.png';
import pojt08 from '../img/project-8.jpg';
import pojt09 from '../img/project-9.png';

function Portfolio() {
  useEffect(() => {
    const filterItems = document.querySelectorAll("[data-filter-item]");
    const filterButtons = document.querySelectorAll("[data-filter-btn]");

    const filterFunc = (selectedValue) => {
      filterItems.forEach((item) => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        
        // Add active class to the clicked button
        this.classList.add("active");

        // Filter projects
        filterFunc(this.textContent.toLowerCase());
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      filterButtons.forEach((button) => {
        button.removeEventListener("click", filterFunc);
      });
    };
  }, []);

  return (
    <>
      <div className="main-content">
        <Navbar />
        <article className="portfolio active" data-page="portfolio">
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>

          <section className="projects">
            {/* Filter Buttons */}
            <ul className="filter-list">
              <li className="filter-item">
                <button className="active" data-filter-btn>All</button>
              </li>
              <li className="filter-item">
                <button data-filter-btn>Web design</button>
              </li>
              <li className="filter-item">
                <button data-filter-btn>Applications</button>
              </li>
              <li className="filter-item">
                <button data-filter-btn>Web development</button>
              </li>
            </ul>

            {/* Project List */}
            <ul className="project-list">
            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={pojt01} alt="finance" loading="lazy"/>
                </figure>

                <h3 class="project-title">Finance</h3>

                <p class="project-category">Web development</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={pojt02} loading="lazy"/>
                </figure>

                <h3 class="project-title">Orizon</h3>

                <p class="project-category">Web development</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web design">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={pojt03} loading="lazy"/>
                </figure>

                <h3 class="project-title">Fundo</h3>

                <p class="project-category">Web design</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="applications">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={pojt04} loading="lazy"/>
                </figure>

                <h3 class="project-title">Brawlhalla</h3>

                <p class="project-category">Applications</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web design">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={pojt05} loading="lazy"/>
                </figure>

                <h3 class="project-title">DSM.</h3>

                <p class="project-category">Web design</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web design">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={pojt06} loading="lazy"/>
                </figure>

                <h3 class="project-title">MetaSpark</h3>

                <p class="project-category">Web design</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={pojt07} loading="lazy"/>
                </figure>

                <h3 class="project-title">Summary</h3>

                <p class="project-category">Web development</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="applications">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={pojt08} loading="lazy"/>
                </figure>

                <h3 class="project-title">Task Manager</h3>

                <p class="project-category">Applications</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={pojt09} loading="lazy"/>
                </figure>

                <h3 class="project-title">Arrival</h3>

                <p class="project-category">Web development</p>

              </a>
            </li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}

export default Portfolio;
