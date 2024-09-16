import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


const MainContainer = () => {
    const movies = useSelector(store => store?.movies?.popularMovies);


   if (!movies) return;

    // const mainMovie = movies[0];
    const mainMovie = movies?.[Math.floor(Math.random() * movies.length)];
    const {original_title , overview , id} = mainMovie;


    return (

      <div className=''>
            <VideoTitle title = {original_title?original_title:""} description = {overview?overview:""} />
            <VideoBackground movieId = {id}/>
      </div>
    )
}

export default MainContainer