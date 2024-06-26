import axios from "axios";
import { apiKey } from "../constants";
const apiBaeUrl='https://api.themoviedb.org/3'
const trendingMoviesEndpoint=`${apiBaeUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint=`${apiBaeUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint=`${apiBaeUrl}/movie/top_rated?api_key=${apiKey}`

export const image500=path=>path? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image185=path=>path? `https://image.tmdb.org/t/p/w185${path}` : null;
export const image342=path=>path? `https://image.tmdb.org/t/p/w342${path}` : null;

const apiCall=async (endpoint, params)=>{
    const options={
        method:'GET',
        url: endpoint,
        params:params? params: {}
    }
    try{
        const response=await axios.request(options);
        return response.data

    }catch{
        console.log('Error');
        return{}
    }
}

export const fetchTrendingMovies=()=>{
    return apiCall(trendingMoviesEndpoint);
}
export const fetchUpcomingMovies=()=>{
    return apiCall(upcomingMoviesEndpoint);
}
export const fetchTopRatedMovies=()=>{
    return apiCall(topRatedMoviesEndpoint);
}