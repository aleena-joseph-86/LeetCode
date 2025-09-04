function multiply(num1: string, num2: string): string {
    const n1 = BigInt(num1);
    const n2 = BigInt(num2);
    const product = n1 * n2;
    return product.toString();
};