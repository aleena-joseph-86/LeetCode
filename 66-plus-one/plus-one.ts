function plusOne(digits: number[]): number[] {
    let loop_start = digits.length - 1;

    for(let i = loop_start; i >= 0 ; i--) {
        if(digits[i]!==9) {
            digits[i]++;
            return digits;
        } else digits[i] = 0;
    }

    return [1,...digits];
};
