import React from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      comments:[
        "hello1",
        "hello2"
      ]
    }
  }
  addComment = (comment)=>{
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
  render(){
    return(
      <div>
        <div>
          <PostBody comments={this.state.comments}  />
        </div>

        <div>
          <CommentBox comments={this.state.comments} addComment={this.addComment} />
        </div>


      </div>
    )
  }
}

export default App
