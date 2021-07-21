import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MoviesGrid from '../components/MoviesGrid';

const Genres = ({ genres, movies, preId }) => {
  const [genre, setGenre] = useState(preId.genre !== undefined ? preId.genre : 28);
  const [genreMovies, setGenreMovies] = useState(movies);
  const [genreList, setGenreList] = useState(
    genres.genres.map((e) => {
      if (e.id == genre) {
        e.selected = true;
      } else {
        e.selected = false;
      }
      return e;
    })
  );

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: process.env.API_KEY,
        with_genres: genre,
      },
    }).then((response) => setGenreMovies(response.data));
  }, [genre]);

  const handleClick = (id) => {
    setGenre(id);
  };

  return (
    <div className=" py-2 flex-grow ">
      <div className="flex flex-wrap items-start  justify-center">
        {genreList.map((e) => (
          <span
            key={e.id}
            className={(e.selected ? 'bg-gray-400 ' : 'bg-gray-300 ') + 'rounded-lg m-2 px-2 py-1 cursor-pointer hover:bg-gray-400'}
            onClick={() => handleClick(e.id)}
          >
            {e.name}
          </span>
        ))}
      </div>
      <MoviesGrid films={genreMovies} />
    </div>
  );
};

Genres.getInitialProps = async (context) => {
  const genresResponse = await axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/genre/movie/list',
    params: {
      api_key: process.env.API_KEY,
    },
  });

  const moviesResponse = await axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      api_key: process.env.API_KEY,
      with_genres: 28,
    },
  });

  return { genres: genresResponse.data, movies: moviesResponse.data, preId: context.query };
};

export default Genres;
