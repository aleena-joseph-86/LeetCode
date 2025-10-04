function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let full = 0;
    let empty = numBottles;
    let drunk = numBottles;
    while(empty>=numExchange) {
    full = empty - numExchange + 1;
    drunk+=1;
    empty=full;
    numExchange++;
    }
   return drunk;
};