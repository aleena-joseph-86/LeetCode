function calPoints(operations: string[]): number {
    const store_numbers = [];
    const n = operations.length;
    for(let i = 0; i < n; i++) {
        if(i !== 0 && operations[i] === "C" ) store_numbers.pop();
        else if(i !== 0 && operations[i] === "D") store_numbers.push(store_numbers[store_numbers.length-1]*2);
        else if(i !== 0 && i !== 1 && operations[i] === "+") {
            const element = store_numbers[store_numbers.length-1] + store_numbers[store_numbers.length-2];
            store_numbers.push(element)}
        else store_numbers.push(Number(operations[i]));
    }
    const answer = store_numbers.reduce((accumulator, currenttValue) => accumulator + currenttValue, 0);
    return answer;
};