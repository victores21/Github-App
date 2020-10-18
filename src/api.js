import { settings } from "./settings";
const API_KEY = settings.API_KEY;

//Get User
export const getUser = async (username) => {
  const req = await fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
    headers: {
      Authorization: `token ${API_KEY}`,
    },
  });

  const data = await req.json();
  return await data;
};

//Get User Repo

export const getUserRepos = async (username) => {
  const req = await fetch(`https://api.github.com/users/${username}/repos`, {
    method: "GET",
    headers: {
      Authorization: `token ${API_KEY}`,
    },
  });
  const data = await req.json();
  return await data;
  // setUserRepos(await data);
  // console.log(await data);
  // setUserRepoLoading(false);
};
