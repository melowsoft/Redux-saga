import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import reducers from './reducers';
import { watcherSaga } from './sagas';


export const createStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [thunk, sagaMiddleware];
    const store =  reduxCreateStore(reducers, {}, applyMiddleware(...middleware))
    sagaMiddleware.run(watcherSaga);
    return store
}   