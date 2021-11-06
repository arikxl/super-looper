import {pedsService} from '../../services/padsService';

export const loadPads =  () => {
    return async dispatch => {
        const pads = pedsService.getPads();
        dispatch({ type:'LOAD_PADS', pads});
    };
} ;

export const addPlayList = (pad) => {
    return async dispatch => {
        dispatch({ type:'ADD_PLAYLIST', pad});
    };
};
