import { configureStore } from '@reduxjs/toolkit';
import webState from '../slices/webStateSlice.js';

export const store = configureStore({
  reducer: {
    web: webState,
  },
});
