import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/authApi'
import { postApi } from './api/postApi'
import { subscriberApi } from './api/subscribesApi'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [subscriberApi.reducerPath]: subscriberApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, postApi.middleware, subscriberApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch