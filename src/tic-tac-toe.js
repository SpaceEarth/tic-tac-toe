const PLAYER_SYMBOLS = ['x', 'o'];

class TicTacToe {
    constructor() {
        this.playMatrix = new Array(3).fill(0).map(() => new Array(3).fill(null));
        this.currentPlayerNumber = 0;
    }

    getCurrentPlayerSymbol() {
        return PLAYER_SYMBOLS[this.currentPlayerNumber];
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playMatrix[rowIndex][columnIndex] === null) {
            this.playMatrix[rowIndex][columnIndex] = PLAYER_SYMBOLS[this.currentPlayerNumber];
            this.currentPlayerNumber = (this.currentPlayerNumber + 1) % PLAYER_SYMBOLS.length;
        }
    }

    isFinished() {
        return this.getWinner() !== null ? true : this.noMoreTurns();
    }

    getWinner() {//rewrite
        const   arr = this.playMatrix,
                row = [],
                col = [],
                diag0 = [],
                diag1 = [],
                allValues = [];

        for (let i = 0; i < 3; i += 1) {
            row.length = col.length = 0;
            for (let j = 0; j < 3; j += 1) {
                row.push(arr[i][j]);
                col.push(arr[j][i]);
            }
            diag0.push(arr[i][i]);
            diag1.push(arr[i][2 - i]);
            allValues.push(row.join(''), col.join(''));
        }
        allValues.push(diag0.join(''), diag1.join(''));
        
        for (let strValue of allValues) {
            if (strValue.match(/(.)\1{2,2}/g) !== null) {
                return strValue.charAt(0);
            }
        }
        return null;
    }

    noMoreTurns() {
        return this.playMatrix.every((el) => {
            return el.every((el) => {
                return el !== null;
            });
        });
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.playMatrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
