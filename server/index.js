import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './userSchema/User.js';
import Playlist from './userSchema/Playlist.js';
import playlistRoutes from './routes/playlistRoutes.js';



const app = express();

app.use(cors(
    {
        origin: ["https://manoj-moviestore-manojs-projects-c2d85db1.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());

const mongoUrl = "mongodb+srv://admin:admin@cluster0.yftugmi.mongodb.net/movie_library?retryWrites=true&w=majority";

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.json("Hello");
})

app.use('/playlist', playlistRoutes);

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to DB");
}).catch((error) => {
  console.error("Failed to connect to DB", error);
});

app.post('/signup', async (req, res) => {
  const { name, mobile, email, password } = req.body;
  try {
    const newUser = new User({ name, mobile, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    if (error.code === 11000) {  // Duplicate email
      res.status(400).json({ message: 'Email already exists' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});


app.post('/login', async (req, res) => {
  const { email, password, playlist } = req.body; 
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      
      const newPlaylist = await Playlist.create({ userId: user._id, movies: playlist });
      
      
      await User.findByIdAndUpdate(user._id, { $push: { playlists: newPlaylist._id } });
      
      
      res.send({ message: 'Login successful', playlist: newPlaylist });
    } else {
      res.status(400).send({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in', error);
    res.status(500).send({ message: 'Error logging in', error });
  }
});






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
