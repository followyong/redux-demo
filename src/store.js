import {createStore} from 'redux'
import commentReducer from './reducers/comment'

   let comments=[
    "hello1",
    "hello2"
  ]

  let store=createStore(commentReducer,comments)

export default store
