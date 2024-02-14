import axios from 'axios';
import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

let urlSignup = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGgedaXMpFIPlLB2RbSSEGp3_lknnzOtg";
let urlLogin = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGgedaXMpFIPlLB2RbSSEGp3_lknnzOtg";


export async function getSignupData(type, userData) {
  const url = type === 'login' ? urlLogin : urlSignup;
  const headers = { "Content-Type": "application/json" };
  let returnType = {
    isSucceed: false.value
  };
  try {
    const { data } = await axios.post(url, JSON.stringify(userData), { headers })
     
    if (data.idToken) {
      returnType.isSucceed = true;
      returnType.idToken = data.idToken;
      return returnType;
    }
  } catch (error) {
    returnType.isSucceed = false;
    returnType.message = error.response.data.error.message ? error.response.data.error.message : 'incoorect email or password';
     
    return returnType;
  }
}
export let imgPrefix = 'https://image.tmdb.org/t/p/w500';

export async function fetchTvData({ signal, searchTerm }) {
  let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${searchTerm}?api_key=3c3176b172e1333dea35fb82ae9f5cf6&language=en-US`, { signal: signal });
  return data;
}

export async function fetchMoviesData({ signal, searchTerm }) {
  let responce;
  if (searchTerm === "trending/movie/day") {
    responce = await axios.get(
      `https://api.themoviedb.org/3/${searchTerm}?api_key=3c3176b172e1333dea35fb82ae9f5cf6`
      , { signal });
  } else {
    responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${searchTerm}?api_key=3c3176b172e1333dea35fb82ae9f5cf6`
      , { signal });
  }
  return responce.data;
}

export async function DifferentCategory({signal , type}) {
  const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=3c3176b172e1333dea35fb82ae9f5cf6`, {signal});
  return data.results.slice(0, 10);
};