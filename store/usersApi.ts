import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Country} from '../types/country';

export const usersApi = createApi({
  reducerPath: 'employeesApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://test.dev-relabs.ru/api/users/list'}),
  endpoints: build => ({
    getUsers: build.query<Country[], string | void>({
      query: limit => ``,
    }),
  }),
});

export const {useGetUsersQuery} = usersApi;
