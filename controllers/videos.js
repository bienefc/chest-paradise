import Video from '../models/video.js';

// @desc Get all videos
// @route GET /api/videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json({ videos });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch videos', error: error.message });
  }
};

// @desc Create a new video
// @route POST /api/videos
const createVideo = async (req, res) => {
  const { title, description, categories, tags, url, thumbnailUrl } = req.body;
  try {
    // Input Validation (Could also be a middleware function)
    if (!title || !url || !thumbnailUrl) {
      return res
        .status(400)
        .json({ message: 'Title, URL, and thumbnail URL are required.' });
    }

    // Save the new video
    const newVideo = new Video({
      title,
      description,
      categories,
      tags,
      url,
      thumbnailUrl,
    });
    await newVideo.save();

    // Return success response
    res.status(201).json(newVideo);
  } catch (error) {
    // Catch server-side errors
    res.status(400).json({ message: error.message });
  }
};

export { getAllVideos, createVideo };
