import {createAction} from 'redux-actions'

export const  REQUEST_IMAGES_DATA='REQUEST_IMAGES_DATA';
export const RECEIVE_IMAGES_DATA='RECEIVE_IMAGES_DATA';

export const requestImagesData=createAction(REQUEST_IMAGES_DATA);
export const receiveImagesData=createAction(RECEIVE_IMAGES_DATA);