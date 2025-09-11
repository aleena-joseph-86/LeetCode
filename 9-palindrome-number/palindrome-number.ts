function isPalindrome(x: number): boolean {
    let given_number = x;
    let reversed_number = 0;
    let last_number;
    if(x<0) return false;
    while(x!=0) {
        last_number = x % 10;
        reversed_number = reversed_number * 10 + last_number;
        x = Math.trunc(x/10);
    }
    if(given_number === reversed_number) return true;
    return false;
};