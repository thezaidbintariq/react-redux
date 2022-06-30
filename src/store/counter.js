import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  
  initialState: {
    counter: 0,
    showCounter: true
  },

  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
    incrementByFive: (state, action) => {
      state.counter += action.payload;
    }
  }

});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;