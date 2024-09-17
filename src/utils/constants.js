export const netflixLogo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const netflixAvatar =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
export const homeBanner =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const nowPlayingMoviesApi =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";
export const popularMoviesApi =
  "https://api.themoviedb.org/3/movie/popular?&page=1";
export const topRatedMoviesApi =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";
export const upcomingMoviesApi =
  "https://api.themoviedb.org/3/movie/upcoming?&page=1";
export const youtubeUrl = "https://www.youtube.com/embed/";
export const tmdbImageCdn = "https://image.tmdb.org/t/p/w500/";

export const supportedLanguages = [
  { name: "English", id: "ENGLISH" },
  { name: "Hindi", id: "HINDI" },
  { name: "Spanish", id: "SPANISH" },
];
