import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: state => { state.count += 1; },
    decrement: state => { state.count -= 1; }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});

export const { increment, decrement } = counterSlice.actions;
export default store;
