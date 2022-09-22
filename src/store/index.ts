import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { gitHubApi } from './GitHub/GitHub.api';

export const store = configureStore( {
  reducer: {
    [gitHubApi.reducerPath]: gitHubApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitHubApi.middleware)
})
