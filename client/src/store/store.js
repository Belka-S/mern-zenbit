import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE } from 'redux-persist';
import { PERSIST, PURGE, REGISTER } from 'redux-persist';

import { itemsReducer } from './items/itemsSlice';
import { authReducer } from './auth/authSlice';

// ----------------persistReducer---------------- //

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

const itemsPersistConfig = {
  key: 'items',
  storage,
  whitelist: ['filter'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  items: persistReducer(itemsPersistConfig, itemsReducer),
});

// ----------------configureStore---------------- //

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// -----------------persistStore----------------- //

export const persistor = persistStore(store);
