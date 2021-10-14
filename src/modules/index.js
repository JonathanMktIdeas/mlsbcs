import { combineReducers } from 'redux';
import counter from './counter';
import auth from './auth';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  counter,
  auth,
})

export default createRootReducer
