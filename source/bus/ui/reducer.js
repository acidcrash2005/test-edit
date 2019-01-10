// Types
import {types} from './types';

const initialState = {
    isEditing: false,
    editState: [],
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.IS_EDITING:
            return {
                ...state,
                isEditing: action.payload,
            };

        case types.INIT_STATE_EDIT:
            return {
                ...state,
                editState: action.payload,
            };

        case types.SET_EDITING_STATE:
            console.log(action);

            return {
                ...state,
                editState: state.editState.map((item) => {
                    if (action.payload.id === item.id) {
                        item.state = action.payload.state;
                    }

                    return item;
                }),
            };

        default:
            return state;
    }
};
