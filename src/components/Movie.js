
import React from 'react';
import Imgix from "react-imgix";


const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
};

const Movie = ({title, poster_path, overview, vote_average, mono}) => (
    <div className='movie'>
        {/* <img
            srcSet={
                'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' +
                poster_path +
                '?w=300&h=450&dpr=1&txt=dpr1&q=75&auto=format' +
                mono +
                ' 1x,' +
                'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' +
                poster_path +
                '?w=300&h=450&dpr=2&txt=dpr2&q=75&auto=format' +
                mono +
                ' 2x,' +
                'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' +
                poster_path +
                '?w=300&h=450&dpr=3&txt=dpr3&q=75&auto=format' +
                mono +
                ' 3x,' +
                'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' +
                poster_path +
                '?w=300&h=450&dpr=4&txt=dpr4&q=75&auto=format' +
                mono +
                ' 4x,' +
                'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' +
                poster_path +
                '?w=300&h=450&dpr=5&txt=dpr5&q=75&auto=format' +
                mono +
                ' 5x'
            }
            src={
                'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' + poster_path
            }
            alt={title}
        /> */}

        <Imgix 
        src={'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' + poster_path} 
        width={300}
        height={450}
        imgixParams={{ monochrome: mono, auto: "compress,format" }}
        />

        <div className='movie-info'>
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>
                {vote_average}
            </span>
        </div>
        <div className='movie-over'>
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default Movie;