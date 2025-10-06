function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0]);
    console.log(intervals);
    let answer: number[][] = [];
    answer.push(intervals[0]);
    const n = intervals.length;
    for(let i = 1; i < n; i++) {
        if(intervals[i][0] <= answer[answer.length - 1][1]) {
            answer[answer.length - 1][1] = Math.max(answer[answer.length - 1][1], intervals[i][1])
        } else {
            answer.push(intervals[i]);
        }
    }
    return answer;
};