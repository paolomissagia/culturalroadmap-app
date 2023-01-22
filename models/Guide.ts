import mongoose from "mongoose";

const guideSchema = new mongoose.Schema({
  category: ["Literature", "Cinema", "Music"],
  level: ["Beginner", "Intermediate", "Advanced"],
  items: [
    {
      0: {
        title: String,
        author: String,
      },
      1: {
        title: String,
        author: String,
      },
      2: {
        title: String,
        author: String,
      },
      3: {
        title: String,
        author: String,
      },
      4: {
        title: String,
        author: String,
      },
    },
  ],
});

export default mongoose.model("Guide", guideSchema);
