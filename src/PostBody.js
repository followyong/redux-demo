import React from 'react'
import {connect} from 'react-redux'

class PostBody extends React.Component{
  render(){
    return(
      <div className="post">
        <div className="postbody">
          <p>
            {this.props.comments.length}评论
          </p>
          <div className="likes-num">
            {this.props.likes}赞
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
