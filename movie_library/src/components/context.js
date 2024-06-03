import React, { useContext, useEffect, useState } from 'react';

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]); 
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("");
  const [playlist, setPlaylist] = useState([]); 

  const [user, setUser] = useState(null);

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data.Search); 
      } else {
        setIsError({
          show: true,
          msg: data.Error
        });
        setIsLoading(false); 
      }
    } catch (error) {
      console.log(error);
      setIsError({
        show: true,
        msg: "An error occurred while fetching data"
      });
      setIsLoading(false); 
    }
  };

  const addToPlaylist = (movie) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, movie]);
  };

  useEffect(() => {
    const randomQueries = ["avengers"];
    const randomQuery = randomQueries[Math.floor(Math.random() * randomQueries.length)];
    getMovies(`${API_URL}&s=${randomQuery}`);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);
      const timerOut = setTimeout(() => {
        getMovies(`${API_URL}&s=${query}`);
      }, 500);
      return () => clearTimeout(timerOut);
    }
  }, [query]);

  return (
    <AppContext.Provider value={{ movies, isLoading, isError, query, setQuery, playlist, addToPlaylist ,user  }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
