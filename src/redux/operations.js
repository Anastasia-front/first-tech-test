import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://647d672baf9847108549ab5d.mockapi.io/api/v1/';

// export const fetchTweets = createAsyncThunk(
//   'tweets/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/tweets');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const fetchTweetsCount = async () => {
  try {
    const response = await axios.get('/tweets');
    const totalCount = response.data.length;
    return totalCount;
  } catch (error) {
    console.error('Error fetching tweets count:', error);
    throw error;
  }
};

const getTweetsCount = async () => {
  try {
    const totalCount = await fetchTweetsCount();
    return totalCount;
    // console.log('Total tweets count:', totalCount);
  } catch (error) {
    console.error('Error getting tweets count:', error);
  }
};

export const totalCountTweets = getTweetsCount();

export const fetchTweetsPart = createAsyncThunk(
  'tweets/fetchPart',
  async (page, thunkAPI) => {
    try {
      const url = `/tweets?page=${page}&limit=3`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'tweets/addTweet',
//   async ({ name, number }, thunkAPI) => {
//     try {
//       const response = await axios.post('/tweets', { name, number });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteTweet = createAsyncThunk(
//   'tweets/deleteContact',
//   async (tweetId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/tweets/${tweetId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
