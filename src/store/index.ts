import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { gitHubApi } from './GitHub/GitHub.api';

export const store = configureStore( {
  reducer: {
    [gitHubApi.reducerPath]: gitHubApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitHubApi.middleware)
})


setupListeners(store.dispatch)
