import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import SingleMovie from './components/SingleMovie';
import Errorpage from './components/Errorpage';
import Home from './components/Home';
import Mainpage from './components/Mainpage';
import Playlist from './components/Playlist';
import { AppProvider } from './components/context';
import ContactPage from './components/Contact';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/movie" element={<Mainpage />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path='/contact' element={<ContactPage />}></Route>
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
