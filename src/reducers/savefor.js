//Save For Reducer
const saveforsReducerDefaultState = [];

export default (state = saveforsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_SAVEFOR':
            return [
                ...state,
                action.savefor
            ];
        case 'REMOVE_SAVEFOR':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_SAVEFOR':
            return state.map((savefor) => {
                if (savefor.id === action.id) {
                    return {
                        ...savefor,
                        ...action.updates
                    };
                } else {
                    return savefor;
                }
            });
        case 'SET_SAVEFORS':
            return action.savefors;
        default:
            return state;
    }
};