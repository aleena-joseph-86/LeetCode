function judgeCircle(moves: string): boolean {
    const n = moves.length;
    let x = 0, y = 0;
    for(let i = 0; i < n; i++) {
        if(moves[i] === "U") y++;
        else if(moves[i] === "D") y--;
        else if(moves[i] === "R") x++;
        else x--;
    }
    if(x===0 && y===0) return true; 
    return false;
};