import { combineReducers } from '@reduxjs/toolkit'
import mainSlice from './main'

const rootReducers = combineReducers({
  main: mainSlice,
})

export default rootReducers

export { updateCounter, increaseCounter, decreaseCounter } from './main'
