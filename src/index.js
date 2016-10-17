import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Homepage from './components/homepage';
import Signin from './components/signin';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Homepage}/>
    <Route path="signin" component={Signin} />
    </Route>
  </Router>

  </Provider>
  , document.querySelector('.appContainer'));
