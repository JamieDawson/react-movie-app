import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import './App.css';
require('dotenv').config();

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_SECRET}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_SECRET}&query=`;

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		getMovies(FEATURED_API);
	}, []);

	const getMovies = (API) => {
		fetch(API)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
			});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (searchTerm) {
			getMovies(SEARCH_API + searchTerm);
			setSearchTerm('');
		}
	};

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<header>
				<div className='header-text'>Movie search website built in React</div>
				<form onSubmit={handleOnSubmit}>
					<input
						className='search'
						type='search'
						placeholder='Search movie title'
						value={searchTerm}
						onChange={handleOnChange}
					/>
				</form>
			</header>

			<div className='movie-container'>
				{movies.length > 0 &&
					movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
		</>
	);
}

export default App;

// https://developers.themoviedb.org/3/getting-started/introduction
// set up api

//30:25
