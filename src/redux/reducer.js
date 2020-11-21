import { createSlice } from '@reduxjs/toolkit'

const initialState = [ {    
      token: localStorage.getItem('Session'),
    }
  
]

const postsSlice = createSlice({
  
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {      
      state[0] = action.payload
    },
    postUpdated(state, action) {
      const { token, newToken } = action.payload
      const existingPost = state.find(post => post.token === token)
      if (existingPost) {
        existingPost.token = newToken        
      }
    }
  }
})

export const { postUpdated ,postAdded } = postsSlice.actions

export default postsSlice.reducer