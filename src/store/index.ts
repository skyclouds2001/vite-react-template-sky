import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers'

const store = configureStore({
  reducer: rootReducers,
})

export default store

export { updateCounter, increaseCounter, decreaseCounter } from './reducers'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
