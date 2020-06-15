import { createStore,  compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

//import rootSaga from './rootSaga'
import  {rootReducer, rootSaga} from '../modules'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {},
    compose(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export default store;