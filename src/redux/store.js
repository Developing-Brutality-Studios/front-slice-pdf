import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './reducer'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})