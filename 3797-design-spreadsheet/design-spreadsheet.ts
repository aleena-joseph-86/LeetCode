class Spreadsheet {
    hash = new Map();
    constructor(rows: number) {

    }

    setCell(cell: string, value: number): void {
        this.hash.set(cell, value);
    }

    resetCell(cell: string): void {
        this.hash.set(cell, 0);
    }

    getValue(formula: string): number {
        const splitIndex = formula.indexOf("+");
        let n1 = formula.slice(1,splitIndex);
        let n2 = formula.slice(splitIndex+1,formula.length);
        if(/[A-Z]/g.test(n1))  n1 = this.hash.get(n1) ?? 0;
        if(/[A-Z]/g.test(n2))  n2 = this.hash.get(n2) ?? 0;
        return Number(n1)+Number(n2);
    }
}