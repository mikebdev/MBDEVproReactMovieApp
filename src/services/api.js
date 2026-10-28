const API_KEY = "yourapikeygoeshere"; // testing key here, but should be in secrets file
const BASE_URL = "https://api.themoviedb.org/3"; // Base URL for the TMDB API /3 = search endpoint

// export async function fetchMovies(query) {
//   const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }   

export const getPopularMovies = async () => {
const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
const data = await response.json();
return data.results;    
}



export const searchMovies = async (query) => {
const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
const data = await response.json();
return data.results;   
}
