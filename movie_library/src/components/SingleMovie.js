import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { API_URL, useGlobalContext } from './context';

const SingleMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null); 
  const [isError, setIsError] = useState(false);

  const { addToPlaylist } = useGlobalContext(); 

  const handleAddToPlaylist = () => {
    addToPlaylist(movie);
    navigate('/playlist'); 
  };

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_URL}&i=${id}`);
        const data = await res.json();
        console.log(data);
        if (data.Response === "True") {
          setMovie(data);   
          setIsLoading(false);
        } else {
          console.error("Error from API:", data.Error);
          setIsError(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    getMovie();
  }, [id]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (isError) {
    return <div className="error">Failed to load movie details.</div>;
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt={movie.Title} />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">Released: {movie.Released}</p>
          <p className="card-text">Genre: {movie.Genre}</p>
          <p className="card-text">Rating: {movie.imdbRating} / 10</p>
          <p className="card-text">Country: {movie.Country}</p>
          <div className="car">
            <NavLink to="/home" className="back-btn">
              Go Back
            </NavLink>
            <button className="sinbt" onClick={handleAddToPlaylist}>
              Add to Playlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
