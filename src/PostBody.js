import React from 'react'
import {connect} from 'react-redux'
import store from './store'

class PostBody extends React.Component{
  handleChange = ()=>{
    console.log(store.getState())
    store.dispatch({type:'INCREMENT_LIKE'})
  }
  render(){
    let {postId,comments} = this.props
    let myComments = comments.filter(value => value.postId ===  postId ).map(item => {
       return item.content
     })
    return(
      <div className="post">
        <div className="postbody">
          <div >
            {this.props.postId}
          </div>
          <p>
            {myComments.length} 评论
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
