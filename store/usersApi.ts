import {GetUsersResponse, IPaginatedResponse, IUser} from '@/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'employeesApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://test.dev-relabs.ru/api/users/'}),
  endpoints: build => ({
    getUsers: build.query<GetUsersResponse, {limit: number; offset: number}>({
      query: ({limit, offset}) => `list?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const {useGetUsersQuery} = usersApi;
