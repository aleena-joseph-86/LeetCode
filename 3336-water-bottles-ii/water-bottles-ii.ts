function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let drunk = numBottles;
    let empty = numBottles;
    while(empty>=numExchange) {
        drunk += 1;
        empty -= numExchange;
        empty++;
        numExchange++;
    }
    return drunk;
};