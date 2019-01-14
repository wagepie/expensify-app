//Pay Off Reducer
const payoffsReducerDefaultState = [];

export default (state = payoffsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PAYOFF':
            return [
                ...state,
                action.payoff
            ];
        case 'REMOVE_PAYOFF':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PAYOFF':
            return state.map((payoff) => {
                if (payoff.id === action.id) {
                    return {
                        ...payoff,
                        ...action.updates
                    };
                } else {
                    return payoff;
                }
            });
        case 'SET_PAYOFFS':
            return action.payoffs;
        default:
            return state;
    }
};