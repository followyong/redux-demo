import React from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import store from './store'
import {Provider} from 'react-redux'


class Postpage extends React.Component{

  render(){
    console.log(this.props)
    let {id} = this.props.match.params
    return(
        <Provider store={store}>
            <div>
                <PostBody postId={id} />
                <CommentBox postId={id}/>
            </div>
        </Provider>
    )
  }
}

export default Postpage
