import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { gitHubApi } from './GitHub/GitHub.api';
import { githubReducer } from './GitHub/Github.slice';

export const store = configureStore( {
  reducer: {
    [gitHubApi.reducerPath]: gitHubApi.reducer,
    github: githubReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitHubApi.middleware)
})


setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
