import { combineReducers } from 'redux';
import { fork, all } from 'redux-saga/effects';


//Entities
import {ui} from './ui/reducer';
import * as uiSagas from './ui/sagas';


export const rootReducer=combineReducers({
    ui  
});

//export default rootReducer;

export function* rootSaga(){
    yield all([
        ...Object.values(uiSagas)
    ].map(fork))
}