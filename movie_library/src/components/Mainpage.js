import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';
import './Mainpage.css';

const imgUrl = "https://via.placeholder.com/200/200";

const Mainpage = () => {
  const { movies, isLoading } = useGlobalContext(); 
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movies && movies.length > 0 
            ? movies.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName = Title.substring(0, 15);

                return (
                  <NavLink to={`/movie/${imdbID}`} key={imdbID}> 
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt={Title} />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : <div>No movies found</div>} 
        </div>
      </section>
    </>
  );
};

export default Mainpage;
