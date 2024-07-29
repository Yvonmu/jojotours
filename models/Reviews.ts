import mongoose from 'mongoose';

const ReviewsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    review: { type: String, required: true },
    profileUrl: { type: String, },
  },
  { timestamps: true }
);

export default mongoose.models.Reviews || mongoose.model('Reviews', ReviewsSchema);
