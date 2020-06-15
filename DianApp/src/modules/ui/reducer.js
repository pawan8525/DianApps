import {combineActions, handleAction} from 'redux-actions';
import { RECEIVE_IMAGES_DATA, receiveImagesData } from './action';
import Format from './format';
import * as model from './model';

var defaultState={
    items:[]
};
export const ui=handleAction(
    combineActions(
        receiveImagesData
    ),
    {
        next(state=model.image,action){
            switch(action.type){
                case RECEIVE_IMAGES_DATA :

              let formattedImage= Format.format(action.payload.data);
                    var newSate={
                        ...state,
                    };
                
                    return newSate.imageList= formattedImage

                default:
                    return state;


            }
        },
        throw(state,action){
            switch(action.type){
                case RECEIVE_IMAGES_DATA:
                    var newState={
                        ...state,
                        ...action.payload
                    }

                    return newState
                    default:
                        return state
                
            }
        }

    },
    defaultState


)