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

    }

    getWinner() {
        // this.playMatrix.some((row) => {
        //     return row.join('').match(/.{3,}/g)
        // })
    }

    noMoreTurns() {
        return this.playMatrix.every((el) => {
            return el.every((el) => {
                return el !== null;
            });
        });
    }

    isDraw() {
        
    }

    getFieldValue(rowIndex, colIndex) {
        return this.playMatrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
