/* According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population..
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
    Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
        let result = [];
        for (let i = 0; i < board.length; i++) {
            let live = 0;
            if (i - 1 > 0) {
                for (let j = 0; j < board[i - 1].length; j++) {
                    let target = board[i - 1][j];
                    if (target === 0) {
                        live++;
                    }
                }
            }
            for (let j = 0; j < board[i].length; j++) {
                console.log(board[i][j]);
                let target = board[i][j];
                if (j === 0) {
                    let cell = board[i][j + 1];
                    if (cell === 1) {
                        live++;
                    }
                }
                if (j > 0) {
                    let cell = board[i][j - 1];
                    let cell2 = board[i][j + 1];
                    if (cell === 1) {
                        live++;
                    }
                    if (cell2 === 1) {
                        live++;
                    }
                }
            }
            if (i + 1 < board.length - 1) {
                for (let j = 0; j < board[i + 1].length; j++) {
                    let target = board[i + 1][j];
                    if (target === 0) {
                        live++;
                    }
                }
            }
            console.log(live);
        }

    }
;

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);