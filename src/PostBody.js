import React from 'react'
import {connect} from 'react-redux'
import store from './store'

class PostBody extends React.Component{
  handleChange = ()=>{
    console.log(store.getState())
    let newLikes = this.props.likes + 1
    console.log(newLikes)
    store.dispatch({type:'ADD_LIKE',like:newLikes})
  }
  render(){
    return(
      <div className="post">
        <div className="postbody">
          <p>
            {this.props.comments.length} 评论
          </p>
          <div className="likes-num" onClick={this.handleChange}>
            {this.props.likes} 赞
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments:state.comments,
  likes:state.likes
})

export default connect(mapStateToProps)(PostBody)
