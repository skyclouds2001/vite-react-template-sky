import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',

  initialState: {
    counter: 0,
  },

  reducers: {
    updateCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload
    },
    increaseCounter: (state) => {
      ++state.counter
    },
    decreaseCounter: (state) => {
      --state.counter
    },
  },
})

export default mainSlice.reducer

export const { updateCounter, increaseCounter, decreaseCounter } = mainSlice.actions
