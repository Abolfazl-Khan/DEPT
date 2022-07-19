import { configureStore } from '@reduxjs/toolkit';
import { workSlice } from '../features/work/workSlice';

export const store = configureStore({
  reducer: {
    [workSlice.reducerPath]: workSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(workSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
