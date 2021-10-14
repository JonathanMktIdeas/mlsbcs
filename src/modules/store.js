import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history';
// import rootReducer from '@modules';
import createRootReducer from '@modules';

export const history = createBrowserHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
    createRootReducer(history), // root reducer with router state
    initialState,
    composedEnhancers
);

export default store
