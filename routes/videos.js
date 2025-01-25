import express from 'express';
const router = express.Router();

import { getAllVideos, createVideo } from '../controllers/videos.js';

router.route('/').get(getAllVideos).post(createVideo);

export default router;
