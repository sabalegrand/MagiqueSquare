import  {combineReducers, createStore, compose} from 'redux';
//import { } from 'reducers';


const configure = (initialState = {}) => {
  const reducer = combineReducers({
  
  });

  let store = createStore(reducer,initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

export default configure;
