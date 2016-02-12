import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './store/configureStore';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

// Don't do this! You’re bringing DevTools into the production bundle.
import DevTools from './containers/DevTools';

const store = configureStore()

render((
  <Provider store={store}>
    <div style={{width:'100%',height:'100%'}}>
      <div style={{width:'640px',height:'100%'}}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={MainPage}/>
            <Route path="*" component={NotFoundPage}/>
          </Route>
        </Router>
      </div>
      <DevTools />
    </div>
  </Provider>
), app)
