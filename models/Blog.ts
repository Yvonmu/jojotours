import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
