import React from 'react'
import {connect} from 'react-redux'

class PostBody extends React.Component{
  render(){
    return(
      <div className="post">
        <div className="postbody">
          <p>
            {this.props.comments.length}
          </p>
          <div className="likes-num">
            333 赞
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments:state
})

export default connect(mapStateToProps)(PostBody)
