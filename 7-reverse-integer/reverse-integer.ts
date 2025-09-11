function reverse(x: number): number {
    let reversed_number = 0;
    let last_number;
    while(x!=0) {
        last_number = x % 10;
        reversed_number = reversed_number * 10 + last_number;
        x = Math.trunc(x/10);
    }
    if(reversed_number >= Math.pow(-2, 31) && reversed_number <Math.pow(2, 31)) return reversed_number;
    return 0;
};