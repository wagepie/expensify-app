export const payoffTotal = (payoffs) => {
    return payoffs
        .map((payoff) => payoff.payment)
        .reduce((sum, value) => sum + value, 0);
};

export const payoffCount = (payoffs) => {
    return payoffs.filter((payoff) => {
        const textMatch = payoff.type.toLowerCase().includes('pay off');
        return textMatch;
    }).length;
};

export const payoffGoals = (payoffs) => {
    return payoffs.filter((payoff) => {
        const textMatch = payoff.type.toLowerCase().includes('pay off');
        return textMatch;
    })
};