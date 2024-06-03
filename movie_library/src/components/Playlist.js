import React, { useState } from 'react';
import { useGlobalContext } from './context';
import { useNavigate } from 'react-router-dom';


const Playlist = () => {
  const { playlist, user } = useGlobalContext();
  const [error, setError] = useState(null);

  const navigate = useNavigate();

 
 const homego = () =>{
  navigate('/home');
 }
  const handleAddPlaylist = async () => {
    try {
      const response = await fetch('/api/playlist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user._id,
          playlist: playlist,
        }),
      });
      if (!response.ok) {
        throw new Error('Successfully added playlist');
      }
      // Handle success
    } catch (error) {
      setError('Successfully added  to playlist');
    }
  };
  

  return (
    <section className="movie-section">
      <h2>My Playlist</h2>
      {error && <p>{error}</p>}
      {playlist.length === 0 ? (
        <p>No movies in your playlist. Add some!</p>
      ) : (
        playlist.map((movie, index) => (
          <div className="movie-card" key={index}>
            <figure>
              <img src={movie.Poster} alt={movie.Title} />
            </figure>
            <div className="card-content">
              <p className="title">{movie.Title}</p>
              <p className="card-text">Released: {movie.Released}</p>
              <p className="card-text">Genre: {movie.Genre}</p>
              <p className="card-text">Rating: {movie.imdbRating} / 10</p>
              <p className="card-text">Country: {movie.Country}</p>
            </div>
          </div>
        ))
      )}
      <button onClick={handleAddPlaylist}>Save Playlist</button>
      <button onClick={homego}>Go back to home</button>
    </section>
  );
};

export default Playlist;
