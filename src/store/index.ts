import { configureStore } from '@reduxjs/toolkit'
import * as reducer from './modules'

export default configureStore({
  reducer: {
    ...reducer
  }
})
