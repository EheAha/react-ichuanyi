import React, { Component,Fragment } from 'react';
import {Home} from 'pages/home'

import More from 'more/views/MoreContainer'
import SinglePage from 'singlePage/views/SinglePageContainer'

import {
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/more' component={More}/>
            <Route path='/singlePage' component={SinglePage}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
