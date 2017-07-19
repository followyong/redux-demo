import React from 'react'
import {connect} from 'react-redux'

class PostBody extends React.Component{
  render(){
    return(
      <div className="post">
        <div className="postbody">
          {
            this.props.comments.length
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments:state
})

export default connect(mapStateToProps)(PostBody)
