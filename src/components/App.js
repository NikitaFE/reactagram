import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Single from './Single';
import PhotoGrid from './PhotoGrid';

const App = props => {
  return (
    <div>
      <h1>
        <Link to="/">Reactagram</Link>
      </h1>
      <Switch>
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Switch>
    </div>
  )
};

export default App;
