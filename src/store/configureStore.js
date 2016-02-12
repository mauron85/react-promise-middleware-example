import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import { hashHistory } from 'react-router';
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const reduxRouterMiddleware = syncHistory(hashHistory);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, promiseMiddleware, reduxRouterMiddleware),
      DevTools.instrument()
    )
  );

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  return store;
}
