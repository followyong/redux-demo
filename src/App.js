import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Home'
import Postpage from './Postpage'


class App extends React.Component{
  render(){
    return(
          <BrowserRouter>
            <div>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/post/:id' component={Postpage} />
              </Switch>
            </div>
          </BrowserRouter>
    )
  }
}

export default App
