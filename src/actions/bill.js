import uuid from 'uuid';
import database from '../firebase/firebase';

//Add goal action
export const addBill = (bill) => ({
    type: 'ADD_BILL',
    bill
});

export const startAddBill = (billData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            type = '', 
            description = '',
            payment = 0
        } = billData;
        const bill = { type, description, payment };
        
        return database.ref(`users/${uid}/bills`).push(bill).then((ref) => {
            dispatch(addBill({
                id: ref.key,
                ...bill
            }));
        });
    };
};

//Remove goal action
export const removeBill = ({ id } = {}) => ({
    type: 'REMOVE_BILL',
    id
});

export const startRemoveBill = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/bills/${id}`).remove().then(() => {
            dispatch(removeBill({ id }));
        });
    };
};

//edit goal action
export const editBill = (id, updates) => ({
    type: 'EDIT_BILL',
    id,
    updates
});

export const startEditBill = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/bills/${id}`).update(updates).then(() => {
            dispatch(editBill(id, updates));
        });
    };
};

// SET_GOALS
export const setBill = (bills) => ({
    type: 'SET_BILLS',
    bills
});

//export const startSetGoals;
export const startSetBill = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/bills`).once('value').then((snapshot) => {
            const bills = [];

            snapshot.forEach((childSnapshot) => {
                bills.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setBill(bills));
        });
    };
};