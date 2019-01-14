import uuid from 'uuid';
import database from '../firebase/firebase';

//Add goal action
export const addPayOff = (payoff) => ({
    type: 'ADD_PAYOFF',
    payoff
});

export const startAddPayOff = (payoffData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            type = '', 
            description = '',
            principal = 0, 
            payment = 0,
            apr = 0,
            loanterm = 0,
            startdate = '',
            totalinterest = 0,
            enddate = ''
        } = payoffData;
        const payoff = { type, description, principal, payment, apr, loanterm, startdate, totalinterest, enddate };
        
        return database.ref(`users/${uid}/payoffs`).push(payoff).then((ref) => {
            dispatch(addPayOff({
                id: ref.key,
                ...payoff
            }));
        });
    };
};

//Remove goal action
export const removePayOff = ({ id } = {}) => ({
    type: 'REMOVE_PAYOFF',
    id
});

export const startRemovePayOff = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/payoffs/${id}`).remove().then(() => {
            dispatch(removePayOff({ id }));
        });
    };
};

//edit goal action
export const editPayOff = (id, updates) => ({
    type: 'EDIT_PAYOFF',
    id,
    updates
});

export const startEditPayOff = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/payoffs/${id}`).update(updates).then(() => {
            dispatch(editPayOff(id, updates));
        });
    };
};

// SET_GOALS
export const setPayOff = (payoffs) => ({
    type: 'SET_PAYOFFS',
    payoffs
});

//export const startSetGoals;
export const startSetPayOff = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/payoffs`).once('value').then((snapshot) => {
            const payoffs = [];

            snapshot.forEach((childSnapshot) => {
                payoffs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setPayOff(payoffs));
        });
    };
};