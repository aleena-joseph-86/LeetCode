function lemonadeChange(bills: number[]): boolean {
    let five = 0, ten = 0;
    for(const bill of bills) {
        if(bill === 5) {
            five+=1;
        } else if(bill === 10) {
            if(five) five-=1;
            else return false;
            ten+=1;
        } else {
            if(five && ten) {
                five-=1;
                ten-=1;
            } else if(five >= 3) {
                five-=3;
            } else return false;
        }
    }
   return true;
};