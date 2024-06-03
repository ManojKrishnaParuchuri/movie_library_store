import Playlist from '../userSchema/Playlist.js';
import User from '../userSchema/User.js';

export const addPlaylist = async (req, res) => {
  const { userId, movies } = req.body;
  
  try {
    const newPlaylist = new Playlist({ userId, movies });
    await newPlaylist.save();
    
    await User.findByIdAndUpdate(userId, { $push: { playlists: newPlaylist._id } });
    
    res.status(201).json({ message: 'Playlist saved successfully', playlist: newPlaylist });
  } catch (error) {
    console.error('Error saving playlist', error);
    res.status(500).json({ message: 'Error saving playlist', error });
  }
};