import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    // uploader: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    categories: [{ type: String, required: true }], // e.g., ["Category1", "Category2"]
    tags: [{ type: String }], // e.g., ["Tag1", "Tag2"]
    url: { type: String, required: true }, // URL to the video file
    thumbnailUrl: { type: String, required: true }, // URL to the thumbnail
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Video = mongoose.model('Video', VideoSchema);
export default Video;
