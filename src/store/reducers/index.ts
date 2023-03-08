import { combineReducers } from '@reduxjs/toolkit'
import MainSlice from './main'

const rootReducers = combineReducers({
  main: MainSlice,
})

export * from './main'

export default rootReducers
