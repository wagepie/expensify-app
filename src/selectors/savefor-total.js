export const saveforTotal = (savefors) => {
    return savefors
        .map((savefor) => savefor.payment)
        .reduce((sum, value) => sum + value, 0);
};

export const saveforCount = (savefors) => {
    return savefors.filter((savefor) => {
        const textMatch = savefor.type.toLowerCase().includes('save for');
        return textMatch;
    }).length;
};

export const saveforGoals = (savefors) => {
    return savefors.filter((savefor) => {
        const textMatch = savefor.type.toLowerCase().includes('save for');
        return textMatch;
    })
};