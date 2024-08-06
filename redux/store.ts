import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  
  import rootReducer from './slices/userSlice'
  import AsyncStorage from '@react-native-async-storage/async-storage'
  
  const persistConfig = {
    key: 'root',
    version: 1,
    storage:AsyncStorage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    }),
})


export let persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch