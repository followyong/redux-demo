import commentReducer from './comment'
import likeReducer from './like'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  comments:commentReducer,
  likes:likeReducer
})

export default rootReducer
