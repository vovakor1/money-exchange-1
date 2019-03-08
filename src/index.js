module.exports = function makeExchange(currency) {
    const result = {};
    const coins = {"H": 50,
                 "Q": 25,
                 "D": 10,
                 "N": 5,
                 "P": 1};
    const maxCurrencyValue = 10000;
    let money = currency;

    if (money > maxCurrencyValue) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    for (let property in coins) {
        if (money < coins[property]) continue;
        let rest = money % coins[property];
        result[property] = (money-rest) / coins[property];
        money = rest;
    }
    return result;
}