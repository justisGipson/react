import React from 'react';

const FormResults = ({results}) => {
    const link = 'https://image.tmdb.org/t/p/w300';
    const resultsFormatted = results.map((element, index) => 
        <li key ={index}>
            <img src={results[index].poster_path === null ? 'http://via.placeholder.com/640x960' : `${link}${results[index].poster_path}`} alt={`${results[index].title} poster`} className='resultPoster' />
            <div>
                <p>{results[index].title}</p>
                <p>{results[index].release_date}</p>
            </div>

        </li>
    );
    return(
        <ul id='results'>
            {resultsFormatted}
        </ul>
    );
}

export default FormResults;