function average(salary: number[]): number {
    const min = Math.min(...salary);
    const max = Math.max(...salary);
    const sum = salary.filter(item => item !== min && item !== max).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum/(salary.length - 2);
};