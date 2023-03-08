import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const main = createSlice({
  name: 'main',

  initialState: {
    counter: 0,
    title: 'redux toolkit pre',
  },

  reducers: {
    updateCounter(state, action: PayloadAction<number>) {
      state.counter = action.payload
    },
  },
})

export const { updateCounter } = main.actions

export default main.reducer
