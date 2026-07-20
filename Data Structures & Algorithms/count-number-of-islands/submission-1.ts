class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        if (grid.length === 0 || grid[0].length === 0) {
            return 0;
        }
        let visited = Array.from({ length: grid.length }, () =>
            new Array(grid[0].length).fill(false),
        );
        let numberOfIsland = 0;
        console.log(visited);
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (!visited[i][j] && grid[i][j] === "1") {
                    visited[i][j] = true;
                    visited = this.markAllConnectedLand(grid, i, j, visited);
                    numberOfIsland++;
                }
            }
        }
        return numberOfIsland;
    }

    markAllConnectedLand(grid: string[][], row: number, col: number, visited: boolean[][]) {
        const nextStep = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        for (let i = 0; i < nextStep.length; i++) {
            //console.log(row, col, nextStep[i]);
            let step = nextStep[i];
            let newRow = row + step[0];
            let newCol = col + step[1];
            //console.log(newRow, newCol);
            //console.log(this.isValidIndex(grid, newRow, newCol));
            if (
                this.isValidIndex(grid, newRow, newCol) &&
                !visited[newRow][newCol] &&
                grid[newRow][newCol] === "1"
            ) {
                visited[newRow][newCol] = true;
                console.log(newRow, newCol, visited[newRow][newCol]);
                visited = this.markAllConnectedLand(grid, newRow, newCol, visited);
            }
        }
        return visited;
    }

    isValidIndex(grid: string[][], row: number, col: number): boolean {
        return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length;
    }
}
