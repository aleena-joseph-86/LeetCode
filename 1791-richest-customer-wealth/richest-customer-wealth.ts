function maximumWealth(accounts: number[][]): number {
    const rows = accounts.length;
    const cols = accounts[0].length;
    let max = 0, sum;
    for(let i = 0; i < rows; i++) {
       sum = 0;
        for(let j = 0; j < cols; j++) {
            sum+=accounts[i][j];
        }
        if(sum > max) max = sum;
    }
    return max;
};