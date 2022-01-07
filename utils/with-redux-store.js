import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../src/reducers';

const bindMiddleware = (middleWare) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleWare));
  }
  return applyMiddleware(...middleWare);
}

export const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]));

const initStore = () => {
  //THIS WAS AND ERROR CAUSING MULTIPLE REFRESHES OF STATE BY LOADING THE ROOTREDUCER TWICE >>>>>> return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
  return store
}

const withReduxStore = createWrapper(initStore);

export default withReduxStore;
