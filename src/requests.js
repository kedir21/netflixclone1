const API_KEY = '57dccdf1eca5ef2cbad5a4f24bbc4af8';

//  http://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2023&${API_KEY}

// http://api.themoviedb.org/3/discover/tv?api_key=57dccdf1eca5ef2cbad5a4f24bbc4af8&with_networks=213
 

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies:`/discover/movie?api_key=${API_KEY}`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27&api_key=${API_KEY}`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
    fetchNewRelease:`/discover/movie?with_genres=18&primary_release_year=2023&api_key=${API_KEY}`,
    fetchKidsMovies:`/discover/tv?on-the-air&language=en-US&api_key=${API_KEY}`,
   

};

export default requests ;