function maxProfit(prices: number[]): number {
    let max_profit = 0;
    const n = prices.length;
    let sell = prices[n-1];
    for(let i = n-2; i >= 0; i--) {
        let profit = 0;
        if(prices[i]<sell) profit = sell - prices[i];
       sell = Math.max(sell, prices[i]);
       max_profit = Math.max(max_profit, profit);
    }
    return max_profit;
};
