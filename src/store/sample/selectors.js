import {createSelector} from '@reduxjs/toolkit';

export const sampleSelector = state => state.sample;

export const isValueGreaterThanZero = createSelector(
  sampleSelector,
  (sample): boolean | undefined => {
    return sample.value > 0;
  },
);
