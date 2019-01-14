export const billTotal = (bills) => {
    return bills
        .map((bill) => bill.payment)
        .reduce((sum, value) => sum + value, 0);
};

export const billCount = (bills) => {
    return bills.filter((bill) => {
        const textMatch = bill.type.toLowerCase().includes('bill');
        return textMatch;
    }).length;
};

export const billGoals = (bills) => {
    return bills.filter((bill) => {
        const textMatch = bill.type.toLowerCase().includes('bill');
        return textMatch;
    })
};