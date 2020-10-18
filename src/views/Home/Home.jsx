import React, { useEffect, useState } from "react";

//Components
import Navbar from "../../components/Navbar/Navbar";

//Styles
import "./Home.css";

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    firstName: "",
    secondName: "",
    lastName: "",
    secondLastName: "",
    ci: "",
    birthDate: "",
  });

  useEffect(() => {
    // const getData = async () => {
    //   const req = await fetch("https://api.github.com/users/victores21");
    //   const data = await req.json();
    //   console.log(await data);
    // };

    // getData();
    const getCookie = () => {
      let cookies = document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce(
          (accumulator, [key, value]) => ({
            ...accumulator,
            [key.trim()]: decodeURIComponent(value),
          }),
          {}
        );

      setUserInfo({
        username: cookies.username,
        email: cookies.email,
        firstName: cookies.firstName,
        secondName: cookies.secondName,
        lastName: cookies.lastName,
        secondLastName: cookies.secondLastName,
        ci: cookies.ci,
        birthDate: cookies.birthDate,
      });
    };
    getCookie();
  }, []);

  return (
    <>
      <Navbar userInfoFromCookies={userInfo} />

      <div className="hero-home">
        <div className="hero-content-container">
          {/* <!-- Top content container --> */}
          <div className="hero-top-container">
            <div className="hero-top-content-container">
              <div className="hero-image-container">
                <img className="hero-image" src="/images/perfil.png" alt="" />
              </div>

              <div className="hero-user-content-container">
                <h1 id="hero-name">Victor Escalona</h1>
                <h2 id="hero-username">@{userInfo.username}</h2>

                <div className="hero-personal-information">
                  <p className="personal-info work-place">
                    <i className="fas fa-briefcase"></i> Ra Marketing Consulting
                  </p>
                  <p className="personal-info place-living">
                    <i className="fas fa-map-marker-alt"></i> Bucaramanga,
                    Colombia
                  </p>
                  <p className="personal-info github-created">
                    <i className="far fa-calendar"></i> Joined in, February, 13,
                    2018
                  </p>
                </div>

                <div className="hero-information-cards">
                  <div className="hero-information-card">
                    <h3 className="hero-information-card-number">18</h3>
                    <h4 className="hero-information-card-category">
                      Repositorios
                    </h4>
                  </div>
                  <div className="hero-information-card">
                    <h3 className="hero-information-card-number">4</h3>
                    <h4 className="hero-information-card-category">
                      Seguidores
                    </h4>
                  </div>
                  <div className="hero-information-card">
                    <h3 className="hero-information-card-number">4</h3>
                    <h4 className="hero-information-card-category">
                      Siguiendo
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Bottom content container --> */}
          <div className="hero-bottom-container">
            <div className="hero-bottom-content-container">
              <h2 id="hero-bottom-title">Repositorios</h2>

              <div className="hero-bottom-search-container">
                <input
                  type="text"
                  name=""
                  id="hero-bottom-search"
                  placeholder="Buscar Repositorio"
                />
              </div>
              <div className="hero-bottom-table">
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
