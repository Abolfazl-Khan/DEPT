import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Client, Work, FilterItem, FetchPortfoliosProps } from './interfaces';

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
      fetchPortfolios: builder.query<Work[], FetchPortfoliosProps>({
        query({ categoryId = '', industryId = '' }) {
          return `/portfolios?categoryId=${categoryId}&industryId=${industryId}`;
        },
      }),
      fetchIndustries: builder.query<FilterItem[], void>({
        query() {
          return `/industries`;
        },
      }),
      fetchCategories: builder.query<FilterItem[], void>({
        query() {
          return `/categories`;
        },
      }),
    };
  },
});

export const {
  useFetchClientsQuery,
  useFetchPortfoliosQuery,
  useFetchIndustriesQuery,
  useFetchCategoriesQuery,
} = workSlice;
