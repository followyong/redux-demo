import React from 'react'
import store from './store'

class CommentBox extends React.Component{

  state={
    comments: store.getState()
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    let newComment = this.comment.value
    store.dispatch({type:'ADD_COMMENT',comment:newComment})
    this.setState({
      comments:store.getState()
    })
    this.myForm.reset()
  }

  render(){
    console.log(store.getState())
    return(
      <div className="comment">
          <div className="commentbox">
              {
                this.state.comments.map(item => (
                  <li key={Math.random()}>{item}</li>
                ))
              }
              <form onSubmit={this.handleSubmit} ref={value=>this.myForm=value} className="comment-form">
                <input type="text"  className="comment-input"
                  ref={value => this.comment = value} />
                <button type="submit" className="comment-button">提交</button>
              </form>
          </div>
      </div>
    )
  }
}

export default CommentBox
