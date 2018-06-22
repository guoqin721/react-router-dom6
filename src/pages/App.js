import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/old-match">Old Match, to be redirected</Link></li>
            <li><Link to="/will-match">Will Match</Link></li>
            <li><Link to="/will-not-match">Will Not Match</Link></li>
            <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Redirect from="/old-match" to="/will-match"/>
            <Route path="/will-match" component={WillMatch}/>
            <Route component={NoaMatch}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

class Home extends Component{
  render() {
    return (
      <h1>
        1、一个没有path属性的Route可以被任何的路径匹配。
        2、Switch返回的是第一个成功匹配到的Route。
      </h1>
    )
  }
}

class WillMatch extends Component{
  render(){
    return(
      <h1>
        Matched
      </h1>
    )
  }
}

class NoaMatch extends Component{
  render(){
    return(
      <h1>No Match for {this.props.location.pathname}</h1>
    )
  }
}

export default App;