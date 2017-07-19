import React from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'

class App extends React.Component{
  
  render(){
    return(
      <div>
        <div>
          <PostBody />
        </div>

        <div>
          <CommentBox />
        </div>


      </div>
    )
  }
}

export default App
