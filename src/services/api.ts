import axios from "axios";
import { Comment } from "../types/comment";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchComments = async (): Promise<Comment[]> => {
  try {
    const response = await axios.get<Comment[]>(API_URL);
    // Add rating property to each comment
    return response.data.map((comment) => ({
      ...comment,
      rating: 0,
    }));
  } catch (error) {
    throw new Error("Failed to fetch comments");
  }
};
