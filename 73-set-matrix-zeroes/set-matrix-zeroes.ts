function setZeroes(matrix: number[][]): void {
    let col0 = 1;
    const rows = matrix.length;
    const cols = matrix[0].length;
    for(let i = 0 ; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(j === 0 && matrix[i][0] === 0) {col0 = 0}
            else if(matrix[i][j]===0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = 1 ; i < rows; i++)
        for(let j = 1; j < cols; j++) 
            if(matrix[i][0]===0 || matrix[0][j]===0) matrix[i][j] = 0;

    if(matrix[0][0] === 0)
    for(let i = cols-1; i >= 1; i--)  matrix[0][i] = 0;

   if(col0===0) 
       for(let i = 0; i< rows; i++)  matrix[i][0] = 0;
};