import React from 'react';
import Link from 'next/link';

export default function MoviesGrid(props) {
  return (
    <div className="flex flex-wrap w-full justify-center items-center">
      {props.films.results.map((e) => {
        return (
          <Link key={e.id} href={`/film?id=` + e.id}>
            <div className="h-auto w-5/6 md:w-1/6 m-4 overflow-hidden flex flex-col items-center justify-between rounded shadow-2xl bg-white bg-opacity-70 cursor-pointer">
              {e.poster_path ? (
                <img src={'https://image.tmdb.org/t/p/original/' + e.poster_path} className="max-w-5/6 max-h-3/4 p-2 flex-grow"></img>
              ) : (
                <div className="flex justify-center items-center max-w-5/6 h-auto p-2 flex-grow">
                  <h3>Image not available</h3>
                </div>
              )}

              <p className="text-center font-bold py-2 px-1">{e.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
