import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Client {
  id: string;
  title: string;
  logo: string;
}

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
    };
  },
});

export const { useFetchClientsQuery } = workSlice;
