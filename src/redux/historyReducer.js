import { CREATE_HIST, DELETE_HIST } from './types';

const initialState = {
    histories : [],
    staticData : "info for user"
}

export const historyReducer = (state = initialState, actions, payload) => {
    console.log(state, actions)
    switch(actions.type){
        case CREATE_HIST:
            return {
                ...state,
                histories: [
                    actions.payload
                ]}
        case DELETE_HIST:
            console.log('delete')
        default:
            return state
    }
}
