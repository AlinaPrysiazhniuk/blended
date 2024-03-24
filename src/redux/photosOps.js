import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'uJJPgvAVKL0QT0gh97pQdXk9sV298JhgV7WrthlQG7JU3yZZk2T9FLxM';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const fetchPhotos = createAsyncThunk(
  'photos/fetchByQuery',
  async ({ query, page }, thunkAPI) => {
    try {
      const { data } = await axios.get(`search?query=${query}&page=${page}`);
      console.log(data.photos);
      return data.photos;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
