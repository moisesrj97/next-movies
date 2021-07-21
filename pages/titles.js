import axios from 'axios';
import { useState, useEffect } from 'react';
import MoviesGrid from '../components/MoviesGrid';
import SearchForm from '../components/SearchForm';

const Search = ({ firstMovies }) => {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState(firstMovies);

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  useEffect(() => {
    if (title !== '') {
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
          api_key: '96a84610e9b7d681c3f898dbb5507656',
          query: title,
          page: 1,
        },
      }).then((response) => setMovies(response.data));
    }
  }, [title]);

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-2 flex-grow">
      <SearchForm handleChange={handleTitleChange} />
      <MoviesGrid films={movies} />
    </div>
  );
};

Search.getInitialProps = async (context) => {
  const response = await axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      api_key: '96a84610e9b7d681c3f898dbb5507656',
      sort_by: 'popularity.desc',
    },
  });

  return { firstMovies: response.data };
};

export default Search;
