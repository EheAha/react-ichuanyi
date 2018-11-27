import React, { Component,Fragment } from 'react';
import {Home} from 'pages/home'

import More from 'more/views/MoreContainer'
// import SinglePage from 'singlePage/views/SinglePageContainer'
import { SwipperContainer as Recommend } from 'pages/recommend'
import { MatchStyle } from 'pages/matchStyle'
import { Search } from 'pages/search'
import ListSingle from 'pages/listsingle/ListSingle'
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
            {/* <Route path='/singlePage' component={SinglePage}/> */}
            <Route path='/tomorrow' component={Recommend} />
            <Route path='/matchStyle' component={MatchStyle}/>
            <Route path='/search' component={Search}/>
            <Route path='/singlePage' component={ListSingle}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
