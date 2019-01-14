import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import wagesReducer from '../reducers/wages';
import payoffReducer from '../reducers/payoff';
import saveforReducer from '../reducers/savefor';
import billReducer from '../reducers/bill';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //Store creation
    const store = createStore(
        combineReducers({
            auth: authReducer,
            wages: wagesReducer,
            payoffs: payoffReducer,
            savefors: saveforReducer,
            bills: billReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

