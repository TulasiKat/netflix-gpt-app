import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        searchResults:null,
        selectedMovieVideo:null,
        selectedMovie:null
    },
    reducers:{
        addNowPlayingMovies:(state , action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state , action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state , action)=> {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state , action)=>{
            state.upcomingMovies = action.payload;
        },
        addSearchResults:(state , action) => {
            state.searchResults = action.payload
        },
        addSelectedMovieVideo:(state , action) => {
            state.selectedMovieVideo = action.payload;
        },
        addSelectedMovie:(state , action) => {
            state.selectedMovie = action.payload;
        },
    }
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies, addUpcomingMovies, addSearchResults, addSelectedMovieVideo,addSelectedMovie} = movieSlice.actions ;
export default movieSlice.reducer;
