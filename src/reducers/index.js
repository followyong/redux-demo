import commentReducer from './comment'
import likeReducer from './like'
import {combineReducer} from 'redux'

const rootReducer = combineReducer({
  comments:commentReducer,
  likes:likeReducer
})

export default rootReducer
