function isRobotBounded(instructions: string): boolean {
    let x = 0, y =0;
    let dirX = 0, dirY = 1;
    const n = instructions.length;
    for(const instruction of instructions) {
        if (instruction === "G") [x, y]= [x + dirX, y + dirY];
        else if (instruction === "L") [dirX, dirY] =[-1*dirY, dirX];
        else [dirX, dirY] = [dirY, -1*dirX];
    }
   return (x === 0 && y === 0) || (dirX !== 0 || dirY !== 1);
};