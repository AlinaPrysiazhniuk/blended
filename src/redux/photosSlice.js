import { createSlice } from '@reduxjs/toolkit';
import { fetchPhotos } from './photosOps';

const slice = createSlice({
  name: 'photos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchPhotos.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPhotos.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

export default slice.reducer;
export const selectPhotos = state => state.photos.items;
