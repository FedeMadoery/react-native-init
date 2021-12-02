import {createAsyncThunk} from '@reduxjs/toolkit';

// Docs: https://redux-toolkit.js.org/api/createAsyncThunk
const fetchValue = createAsyncThunk(
  'sample/fetchValue',
  async (userId, thunkAPI) => {
    const response = await new Promise(r => setTimeout(r(10), 500));
    return response;
  },
);

export {fetchValue};
