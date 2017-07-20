import React from 'react'
import store from './store'
import {connect} from 'react-redux'

class CommentBox extends React.Component{
  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(store.getState())
    let newComment = this.comment.value
    store.dispatch({type:'ADD_COMMENT',comment:newComment})
    this.myForm.reset()
  }
  render(){
    return(
      <div className="comment">
          <div className="commentbox">
              {
                this.props.comments.map(item => (
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

const mapStateToProps = (state)=>({
  comments:state.comments
})

export default connect(mapStateToProps)(CommentBox)
