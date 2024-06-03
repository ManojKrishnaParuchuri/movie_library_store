// Home.js
import React from "react";
import Search from "./Search";
import Mainpage from "./Mainpage";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '50px', justifyContent: 'center' }}>
        <Link to="/" style={{ width: '100px', height: '70px', color: 'white', textAlign: 'center' }}>LogOut</Link>
        <Link to="/playlist" style={{ width: '100px', height: '70px', color: 'white', textAlign: 'center' }}>View Playlist</Link>
      </div>
      <Search />
      <Mainpage />
    </>
  );
};

export default Home;
