import { createSlice } from '@reduxjs/toolkit';
import { fetchTweetsPart } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tweetSlice = createSlice({
  name: 'tweeets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setTweetActiveState(state, action) {
      const { tweetId, isActive } = action.payload;
      const tweet = state.items.find(tweet => tweet.id === tweetId);
      if (tweet) {
        tweet.isActive = isActive;
      }
    },
  },
  extraReducers: {
    [fetchTweetsPart.pending]: handlePending,
    [fetchTweetsPart.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [
        ...state.items,
        ...action.payload.map(tweet => ({
          ...tweet,
          isActive: false,
        })),
      ];
    },
    [fetchTweetsPart.rejected]: handleRejected,
  },
});

export const { setTweetActiveState } = tweetSlice.actions;

export const tweets = tweetSlice.reducer;
