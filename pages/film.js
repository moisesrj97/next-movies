import axios from 'axios';
import { withRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

const FilmPage = withRouter((props) => {
  return (
    <div className="flex items-center justify-around min-h-full py-2">
      <img src={'https://image.tmdb.org/t/p/original/' + props.movieData.poster_path} className="w-3/12 m-5 ml-14 "></img>
      <div className="w-6/12 flex flex-col items-center justify-start">
        <h1 className="text-2xl font-bold mb-4">
          {props.movieData.title} - {props.movieData.vote_average}/10⭐
        </h1>
        {props.movieData.title !== props.movieData.original_title && <h2>Original title: ({props.movieData.original_title})</h2>}
        <div className="flex mb-3">
          {props.movieData.genres.map((e) => (
            <Link key={e.id} href={`/genres?genre=` + e.id}>
              <span className="bg-gray-300 rounded-lg m-2 px-2 py-1 hover:bg-gray-400 cursor-pointer">{e.name}</span>
            </Link>
          ))}
        </div>
        <p>{props.movieData.overview}</p>
      </div>
    </div>
  );
});

FilmPage.getInitialProps = async (context) => {
  const response = await axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/movie/' + context.query.id,
    params: {
      api_key: process.env.API_KEY,
    },
  });

  return { movieData: response.data };
};

export default FilmPage;
