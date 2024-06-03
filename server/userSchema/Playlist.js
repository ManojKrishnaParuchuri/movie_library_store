
import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Replace 'User' with your actual user model/schema
    required: true
  },
  movies: [
    {
      type: Object, // Adjust as per your movie schema
      required: true
    }
  ]
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;

