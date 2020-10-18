import React from "react";

//Components
import Navbar from "../../components/Navbar/Navbar";
//Styles
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div class="hero">
        <div class="hero-content-container">
          {/* <!-- Top content container --> */}
          <div class="hero-top-container">
            <div class="hero-top-content-container">
              <div class="hero-image-container">
                <img class="hero-image" src="/images/perfil.png" alt="" />
              </div>

              <div class="hero-user-content-container">
                <h1 id="hero-name">Victor Escalona</h1>
                <h2 id="hero-username">@victores21</h2>

                <div class="hero-personal-information">
                  <p class="personal-info work-place">
                    <i class="fas fa-briefcase"></i> Ra Marketing Consulting
                  </p>
                  <p class="personal-info place-living">
                    <i class="fas fa-map-marker-alt"></i> Bucaramanga, Colombia
                  </p>
                  <p class="personal-info github-created">
                    <i class="far fa-calendar"></i> Joined in, February, 13,
                    2018
                  </p>
                </div>

                <div class="hero-information-cards">
                  <div class="hero-information-card">
                    <h3 class="hero-information-card-number">18</h3>
                    <h4 class="hero-information-card-category">Repositorios</h4>
                  </div>
                  <div class="hero-information-card">
                    <h3 class="hero-information-card-number">4</h3>
                    <h4 class="hero-information-card-category">Seguidores</h4>
                  </div>
                  <div class="hero-information-card">
                    <h3 class="hero-information-card-number">4</h3>
                    <h4 class="hero-information-card-category">Siguiendo</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Bottom content container --> */}
          <div class="hero-bottom-container">
            <div class="hero-bottom-content-container">
              <h2 id="hero-bottom-title">Repositorios</h2>

              <div class="hero-bottom-search-container">
                <input
                  type="text"
                  name=""
                  id="hero-bottom-search"
                  placeholder="Buscar Repositorio"
                />
              </div>
              <div class="hero-bottom-table">
                {/* <!-- Here goes the table with re repositories --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
