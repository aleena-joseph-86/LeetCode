function generate(numRows: number): number[][] {
    let answer: number[][] = [];
    for(let i = 0; i < numRows; i++) {
        let temp: number[] = [];
        let num = 1;
        let numerator = i;
        temp.push(num);
        for(let j = 1; j <= i; j++) {
            num*=numerator--;
            num/=j;
            temp.push(num);
        }
        answer.push(temp);
    }
    return answer;
};