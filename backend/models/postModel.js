import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String
    },
    summary: {
      type: String
    },
    content: {
      type: String
    }
  }
)

export const postModel = mongoose.model('post', postSchema)