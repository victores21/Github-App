import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import { Link } from "react-router-dom";

//Components
import Navbar from "../../components/Navbar/Navbar";
import { JumpCircleLoading } from "react-loadingg";

import { getUser } from "../../api.js";
//Styles
import "./Home.css";

const Home = () => {
  const [cookieInfo, setCookieInfo] = useState({
    username: "",
    email: "",
    firstName: "",
    secondName: "",
    lastName: "",
    secondLastName: "",
    ci: "",
    birthDate: "",
  });

  const [userInfo, setUserInfo] = useState({
    avatar_url: "",
    name: "",
    username: "",
    company: "",
    location: "",
    created_at: "",
    public_repos: "",
    followers: "",
    following: "",
    html_url: "",
  });
  const [userRepos, setUserRepos] = useState("");
  const [loading, setLoading] = useState(true);
  const [userRepoLoading, setUserRepoLoading] = useState(true);

  useEffect(() => {
    const getUserRepos = async (username) => {
      const req = await fetch(
        `https://api.github.com/users/${username}/repos`,
        {
          method: "GET",
          headers: {
            Authorization: `token eb9f311ef9640e1caabbabb061f19c8be818ef14`,
          },
        }
      );
      const data = await req.json();
      setUserRepos(await data);
      // console.log(await data);
      setUserRepoLoading(false);
    };

    if (cookieInfo.username.length > 0) {
      getUser(cookieInfo.username).then((data) => {
        setUserInfo({
          avatar_url: data.avatar_url,
          name: data.name,
          username: data.login,
          company: data.company,
          location: data.location,
          created_at: data.created_at,
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          html_url: data.html_url,
        });
        setLoading(false);
      });

      getUserRepos(cookieInfo.username);
    }

    console.log("CookieInfo", cookieInfo.username);
  }, [cookieInfo.username]);

  useEffect(() => {
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

      setCookieInfo({
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

  const isDataUndefined = (data) => {
    if (data === undefined) {
      return true;
    } else {
      return false;
    }
  };
  console.log(userInfo.name);
  if (loading) {
    return <JumpCircleLoading />;
  } else {
    return (
      <>
        <Navbar cookieInfo={cookieInfo} />

        <div className="hero-home">
          <div className="hero-content-container">
            {/* <!-- Top content container --> */}
            <div className="hero-top-container">
              <div className="hero-top-content-container">
                <div className="hero-image-container">
                  <img
                    className="hero-image"
                    src={
                      isDataUndefined(userInfo.avatar_url)
                        ? "/images/github-logo.png"
                        : userInfo.avatar_url
                    }
                    alt=""
                  />
                </div>

                <div className="hero-user-content-container">
                  <h1 id="hero-name">
                    {isDataUndefined(userInfo.name)
                      ? "Not Found"
                      : userInfo.name}
                  </h1>
                  <h2 id="hero-username">
                    @<a href={userInfo.html_url}>{userInfo.username}</a>
                  </h2>

                  <div className="hero-personal-information">
                    {userInfo.company === null || undefined ? (
                      ""
                    ) : (
                      <p className="personal-info work-place">
                        <i className="fas fa-briefcase"></i> {userInfo.company}
                      </p>
                    )}

                    {userInfo.location === null || undefined ? (
                      ""
                    ) : (
                      <p className="personal-info place-living">
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        {userInfo.location}
                      </p>
                    )}
                    {userInfo.created_at === null || undefined ? (
                      ""
                    ) : (
                      <p className="personal-info github-created">
                        <i className="far fa-calendar"></i>{" "}
                        {userInfo.created_at}
                      </p>
                    )}
                  </div>

                  <div className="hero-information-cards">
                    <div className="hero-information-card">
                      <h3 className="hero-information-card-number">
                        {isDataUndefined(userInfo.public_repos)
                          ? "Not Found"
                          : userInfo.public_repos}
                      </h3>
                      <h4 className="hero-information-card-category">
                        Repositorios
                      </h4>
                    </div>
                    <div className="hero-information-card">
                      <h3 className="hero-information-card-number">
                        {isDataUndefined(userInfo.followers)
                          ? "Not Found"
                          : userInfo.followers}
                      </h3>
                      <h4 className="hero-information-card-category">
                        Seguidores
                      </h4>
                    </div>
                    <div className="hero-information-card">
                      <h3 className="hero-information-card-number">
                        {isDataUndefined(userInfo.following)
                          ? "Not Found"
                          : userInfo.following}
                      </h3>
                      <h4 className="hero-information-card-category">
                        Siguiendo
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-another-profile">
              <Link to="/" className="add-another-profile-button">
                Busca otro perfil!
              </Link>
            </div>
            {/* <!-- Bottom content container --> */}
            <div className="hero-bottom-container">
              <div className="hero-bottom-content-container">
                {/* <h2 id="hero-bottom-title">Repositorios</h2> */}

                <div className="hero-bottom-table">
                  {/* <!-- Here goes the table with re repositories --> */}
                  {isDataUndefined(userInfo.name) ? (
                    <h2 id="hero-bottom-title">Not Found</h2>
                  ) : (
                    <DataTable
                      userRepos={userRepos}
                      userRepoLoading={userRepoLoading}
                    />
                  )}
                  {/* <DataTable
                    userRepos={userRepos}
                    userRepoLoading={userRepoLoading}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Home;
