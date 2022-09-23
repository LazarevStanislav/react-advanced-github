import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRepo, IUser, ServerResponse } from '../../models/models';

export const gitHubApi = createApi( {
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery( {
    baseUrl: 'https://api.github.com/'
  } ),
  refetchOnFocus: true,
  endpoints: build => ( {
    searchUsers: build.query<IUser[], string>( {
      query: (search: string) => ( {
        url: 'search/users',
        params: {
          q: search,
          per_page: 10
        }
      } ),
      transformResponse: (response: ServerResponse<IUser>) => response.items
    } ),

    getUserRepos: build.query<IRepo[], string>( {
      query: ( username: string ) => ( {
        url: `users/${username}/repos`
      })
    })
  })
})

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = gitHubApi
