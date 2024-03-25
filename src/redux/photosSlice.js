import { createSlice } from '@reduxjs/toolkit';
import { fetchPhotos } from './photosOps';

const slice = createSlice({
  name: 'photos',
  initialState: {
    items: [],
    loading: false,
    error: null,
    currentQuery: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchPhotos.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;

        // Перевірка, чи відповідає поточний queryName запиту, що завершився
        if (action.payload.length === 0) {
          state.error = 'No photos';
        } else {
          if (state.currentQuery === action.meta.arg.queryName) {
            // Додаємо нові фотографії до вже завантажених
            state.items = [...state.items, ...action.payload];
          } else {
            // Якщо queryName змінилося, оновлюємо items з новими фотографіями
            state.currentQuery = action.meta.arg.queryName;
            state.items = action.payload;
          }
        }
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default slice.reducer;
export const selectPhotos = state => state.photos.items;
