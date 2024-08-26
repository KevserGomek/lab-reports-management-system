import { configureStore } from '@reduxjs/toolkit';
import reportReducer from './reportsSlice';
import userReducer from './usersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux'; //birden fazla reducer birleştirmek için
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['reports', 'users'],  //kalıcı olarak saklanmasını istediklerin
};

const rootReducer = combineReducers({
  reports: reportReducer,
  users: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

  reducer: persistedReducer,

  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;