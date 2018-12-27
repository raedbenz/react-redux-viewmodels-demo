import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

function configureStore() {
    const middleWare = applyMiddleware(thunk);
    return createStore(rootReducer, middleWare);
}

export default configureStore;