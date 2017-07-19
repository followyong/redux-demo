import React from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import store from './store'
import {Provider} from 'react-redux'

class App extends React.Component{

  render(){
    return(
        <Provider store={store}>
          <div>
            <div>
              <PostBody />
            </div>
            <div>
              <CommentBox />
            </div>
          </div>
        </Provider>
    )
  }
}

export default App
