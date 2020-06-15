
import { takeEvery, put, call } from 'redux-saga/effects';
import {getImagesData} from './api'
import {
    REQUEST_IMAGES_DATA,
    receiveImagesData,
    
} from './action';

function* callRequestImagesData(action){
    var results=yield call(getImagesData,action.payload)
    yield put(receiveImagesData(results))
}

export function* requestImagesDataSaga(){
    yield takeEvery(REQUEST_IMAGES_DATA,callRequestImagesData)
}