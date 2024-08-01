import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { globalSlice } from '@store/slices';
import { authAPI } from '@store/api';

export const store = configureStore({
    reducer: {
        global: globalSlice.reducer,
        [authAPI.reducerPath]: authAPI.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(authAPI.middleware),

    devTools: true,
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
