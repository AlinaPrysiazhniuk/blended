import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import filterReducer from './filterSlice';
import photosReducer from './photosSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import querySlice from './querySlice';

const contactsPersistConfig = {
  key: 'todos',
  storage,
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  todosReducer,
);

export const store = configureStore({
  reducer: {
    todos: persistedContactsReducer,
    filter: filterReducer,
    photos: photosReducer,
    query: querySlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
