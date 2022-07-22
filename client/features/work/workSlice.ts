import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Client, Work } from './interfaces';

export const workSlice = createApi({
  reducerPath: 'work',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchClients: builder.query<Client[], void>({
        query() {
          return `/clients`;
        },
      }),
      fetchPortfolio: builder.query<Work[], string | void>({
        query(categoryId = '', industryId = '') {
          return `/portfolios?categoryId=${categoryId}&industryId=${industryId}`;
        },
      }),
    };
  },
});

export const { useFetchClientsQuery, useFetchPortfolioQuery } = workSlice;
