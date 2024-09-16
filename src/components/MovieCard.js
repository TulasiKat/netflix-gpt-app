import React from 'react';
import { tmdbImageCdn } from '../utils/constants';

const MovieCard = (props) => {
    const {details} = props;

  return (
    <div className='w-48 pr-4'>
        <img src={tmdbImageCdn+details.poster_path} alt={details.title}/>
    </div>
  )
}

export default MovieCard;