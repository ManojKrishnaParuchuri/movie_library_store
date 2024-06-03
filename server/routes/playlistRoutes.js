import express from 'express';
import { addPlaylist } from '../controllers/playlistController.js';

const router = express.Router();

router.post('/add', addPlaylist);

export default router;