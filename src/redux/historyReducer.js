import { CREATE_HIST, DELETE_HIST } from './types';

const initState = {
    browserHistory : []
}

export const historyReducer = (state = initState, action) => {
    switch(action.type){
        case CREATE_HIST:
            console.log(state.browserHistory)
            return {...state, browserHistory: [...state.browserHistory, action.payload]}
        case DELETE_HIST:
            console.log(action.payload)
            console.log(state.browserHistory)
            return {...state, browserHistory: [ ...state.browserHistory.slice(0, action.payload),
                                                ...state.browserHistory.slice(action.payload + 1)]}
        default:
            return state
    }
}
