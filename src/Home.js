import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li><Link to='/post/1'>git技巧</Link></li>
          <li><Link to='/post/2'>学习 Redux</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home
