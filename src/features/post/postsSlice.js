import {createSlice, nanoid} from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = [
  {
    id: '1',
    title: 'title1',
    content: 'content1',
    date: dayjs().subtract(10, 'minute').toISOString()
  },
  {
    id: '2',
    title: 'title2',
    content: 'content2',
    date: dayjs().subtract(5, 'minute').toISOString()
  },
  {
    id: '3',
    title: 'title3',
    content: 'content3',
    date: dayjs().subtract(3, 'minute').toISOString()
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions
export default postsSlice.reducer