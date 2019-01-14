import uuid from 'uuid';
import database from '../firebase/firebase';

//Add goal action
export const addSaveFor = (savefor) => ({
    type: 'ADD_SAVEFOR',
    savefor
});

export const startAddSaveFor = (saveforData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            type = '', 
            description = '',
            savegoal = 0, 
            savedtodate = 0,
            payment = 0,
            apr = 0,
            enddate = 0
        } = saveforData;
        const savefor = { type, description, savegoal, savedtodate, payment, apr, enddate };
        
        return database.ref(`users/${uid}/savefors`).push(savefor).then((ref) => {
            dispatch(addSaveFor({
                id: ref.key,
                ...savefor
            }));
        });
    };
};

//Remove goal action
export const removeSaveFor = ({ id } = {}) => ({
    type: 'REMOVE_SAVEFOR',
    id
});

export const startRemoveSaveFor = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/savefors/${id}`).remove().then(() => {
            dispatch(removeSaveFor({ id }));
        });
    };
};

//edit goal action
export const editSaveFor = (id, updates) => ({
    type: 'EDIT_SAVEFOR',
    id,
    updates
});

export const startEditSaveFor = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/savefors/${id}`).update(updates).then(() => {
            dispatch(editSaveFor(id, updates));
        });
    };
};

// SET_GOALS
export const setSaveFor = (savefors) => ({
    type: 'SET_SAVEFORS',
    savefors
});

//export const startSetGoals;
export const startSetSaveFor = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/savefors`).once('value').then((snapshot) => {
            const savefors = [];

            snapshot.forEach((childSnapshot) => {
                savefors.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setSaveFor(savefors));
        });
    };
};