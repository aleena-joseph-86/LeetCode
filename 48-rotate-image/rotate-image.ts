function rotate(matrix: number[][]): void {
    const n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            if(i===j) continue;
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for(let i = 0; i < n; i++) matrix[i] = matrix[i].reverse();
};