const initialState = {
    pads: [], 
    tracksToPlay: [],
}

export function padsReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_PADS':
            return { ...state, pads: action.pads };
        case 'ADD_PLAYLIST': 
            return { ...state, tracksToPlay: [...state.tracksToPlay, action.pad] };
        default:
            return state
    };
};



