// Types
import { types } from './types';

export const setEditing = (isEditing) => {
    return {
        type:    types.IS_EDITING,
        payload: isEditing,
    };
};

export const initEditState = (editState) => {
    return {
        type:    types.INIT_STATE_EDIT,
        payload: editState,
    };
};

export const setEditingState = (editState) => {
    return {
        type:    types.SET_EDITING_STATE,
        payload: editState,
    };
};
