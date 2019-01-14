import uuid from 'uuid';
import database from '../firebase/firebase';

//Add wage action
export const addWage = (wage) => ({
    type: 'ADD_WAGE',
    wage
});

export const startAddWage = (wageData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            occupation = '', 
            location = '', 
            weeksamonth = 0, 
            hoursaweek = 0,
            hourlywage = 0,
            netwage = 0,                     
        } = wageData;
        const wage = { occupation, location, weeksamonth, hoursaweek, hourlywage, netwage };
        
        return database.ref(`users/${uid}/wages`).push(wage).then((ref) => {
            dispatch(addWage({
                id: ref.key,
                ...wage
            }));
        });
    };
};

//Remove wage action
export const removeWage = ({ id } = {}) => ({
    type: 'REMOVE_WAGE',
    id
});

export const startRemoveWage = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/wages/${id}`).remove().then(() => {
            dispatch(removeWage({ id }));
        });
    };
};

//edit wage action
export const editWage = (id, updates) => ({
    type: 'EDIT_WAGE',
    id,
    updates
});

export const startEditWage = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/wages/${id}`).update(updates).then(() => {
            dispatch(editWage(id, updates));
        });
    };
};

// SET_WAGES
export const setWages = (wages) => ({
    type: 'SET_WAGES',
    wages
});

//export const startSetWages;
export const startSetWages = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/wages`).once('value').then((snapshot) => {
            const wages = [];
            snapshot.forEach((childSnapshot) => {
                wages.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setWages(wages));
        });
    };
};