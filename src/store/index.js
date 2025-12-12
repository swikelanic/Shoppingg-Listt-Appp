import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['items'], // persist only the items slice
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with Redux DevTools support
export const store = createStore(persistedReducer, composeWithDevTools());

// Create persistor
export const persistor = persistStore(store);
