function numWaterBottles(numBottles: number, numExchange: number): number {
    let full = numBottles;
    let empty = numBottles;
    let drunk = numBottles;
    while(full>0) {
    full = Math.trunc(empty/numExchange);
    empty = full + empty%numExchange;
    drunk += full;
    }
   return drunk;
};