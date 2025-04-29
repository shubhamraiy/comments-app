import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Comment, CommentsState } from "../types/comment";
import { fetchComments } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@comments_ratings";

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null,
};

export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (_, { rejectWithValue }) => {
    try {
      const comments = await fetchComments();
      const savedRatings = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedRatings) {
        const ratingsMap = JSON.parse(savedRatings);
        return comments.map((comment) => ({
          ...comment,
          rating: ratingsMap[comment.id] || 0,
        }));
      }
      return comments;
    } catch (error) {
      return rejectWithValue("Failed to load comments");
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    updateRating: (
      state,
      action: PayloadAction<{ id: number; rating: number }>
    ) => {
      const { id, rating } = action.payload;
      const comment = state.comments.find((comment) => comment.id === id);
      if (comment) {
        comment.rating = rating;
        // Save rating to AsyncStorage
        AsyncStorage.getItem(STORAGE_KEY).then((savedRatings) => {
          const ratingsMap = savedRatings ? JSON.parse(savedRatings) : {};
          ratingsMap[id] = rating;
          AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ratingsMap));
        });
      }
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(loadComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { updateRating, setError, clearError } = commentsSlice.actions;
export default commentsSlice.reducer;
