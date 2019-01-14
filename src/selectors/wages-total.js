export default (wages) => {
    return wages
        .map((wage) => wage.netwage)
        .reduce((sum, value) => sum + value, 0);
};