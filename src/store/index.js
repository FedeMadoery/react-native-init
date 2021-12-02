import {configureStore} from '@reduxjs/toolkit';
import sampleReducer from './sample/reducer';

export const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});
