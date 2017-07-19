import React from 'react'

class PostBody extends React.Component{
  render(){
    console.log(this.props)
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

export default PostBody
