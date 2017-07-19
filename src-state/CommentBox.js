import React from 'react'

class CommentBox extends React.Component{

  handleSubmit = (e) =>{
    e.preventDefault()
    let newComment = this.comment.value
    this.props.addComment(newComment)
    this.myForm.reset()
  }

  render(){
    let {comments} = this.props
    return(
      <div className="comment">
          <div className="commentbox">
              {
                comments.map(item => (
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
