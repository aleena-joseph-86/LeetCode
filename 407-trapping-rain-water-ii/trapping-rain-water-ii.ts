type Cell = {
    row: number;
    col: number;
    height: number;
};

class MinBinaryHeap {
    private heap: Cell[] = [];

    private compare(a: Cell, b: Cell): boolean {
        return a.height < b.height;
    }

    push(cell: Cell): void {
        this.heap.push(cell);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): Cell | undefined {
        if (this.heap.length === 0) return undefined;
        const top = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return top;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    private bubbleUp(index: number): void {
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (this.compare(element, parent)) {
                this.heap[parentIndex] = element;
                this.heap[index] = parent;
                index = parentIndex;
            } else break;
        }
    }

    private bubbleDown(index: number): void {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            let swapIndex = -1;

            if (leftIndex < length) {
                if (this.compare(this.heap[leftIndex], element)) {
                    swapIndex = leftIndex;
                }
            }

            if (rightIndex < length) {
                if (
                    this.compare(this.heap[rightIndex], 
                                 swapIndex === -1 ? element : this.heap[leftIndex])
                ) {
                    swapIndex = rightIndex;
                }
            }

            if (swapIndex === -1) break;
            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = element;
            index = swapIndex;
        }
    }
}

function trapRainWater(heightMap: number[][]): number {
    const m = heightMap.length;
    const n = heightMap[0].length;

    if (m <= 2 || n <= 2) return 0;

    const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
    const heap = new MinBinaryHeap();

    // Add boundary cells
    for (let i = 0; i < m; i++) {
        for (let j of [0, n - 1]) {
            heap.push({ row: i, col: j, height: heightMap[i][j] });
            visited[i][j] = true;
        }
    }
    for (let j = 0; j < n; j++) {
        for (let i of [0, m - 1]) {
            if (!visited[i][j]) {
                heap.push({ row: i, col: j, height: heightMap[i][j] });
                visited[i][j] = true;
            }
        }
    }

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    let water = 0;

    while (!heap.isEmpty()) {
        const cell = heap.pop()!;
        for (let [dx, dy] of dirs) {
            const nr = cell.row + dx;
            const nc = cell.col + dy;

            if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
                visited[nr][nc] = true;
                const neighborHeight = heightMap[nr][nc];
                water += Math.max(0, cell.height - neighborHeight);
                heap.push({
                    row: nr,
                    col: nc,
                    height: Math.max(neighborHeight, cell.height)
                });
            }
        }
    }

    return water;
}