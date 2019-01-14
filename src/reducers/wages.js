//Wages Reducer
const wagesReducerDefaultState = [];

export default (state = wagesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_WAGE':
            return [
                ...state,
                action.wage
            ];
        case 'REMOVE_WAGE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_WAGE':
            return state.map((wage) => {
                if (wage.id === action.id) {
                    return {
                        ...wage,
                        ...action.updates
                    };
                } else {
                    return wage;
                }
            });
        case 'SET_WAGES':
            return action.wages;
        default:
            return state;
    }
};