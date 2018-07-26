import { createStore } from 'redux';
import treeReducer from '../reducers/tree';

export default () => createStore(
  treeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
