class TicTacToe {


    constructor() {
        this.item = ['x','o'];
        this.one =  undefined;

        this.chart = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
    getCurrentPlayerSymbol() {
        if(this.one === undefined)
            return this.item[0];
        return  this.one? this.item[0] : this.item[1];
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.chart[rowIndex][columnIndex] === null) {

            if(this.one === undefined)
                this.one = true;

            this.one = !this.one;

            this.chart[rowIndex][columnIndex] = this.getValue(this.one);

        }
    }
    getValue(value){
     return  value? this.item[1] : this.item[0];
    }

    isFinished() {
        return this.getWinner()!==null || this.isDraw();
    }

    getWinner() {
        let won = null;

        if(this.chart[0][2]===this.chart[1][1] && this.chart[1][1]===this.chart[2][0])
            won = this.chart[1][1];
        if(this.chart[0][0]===this.chart[1][1] && this.chart[1][1]===this.chart[2][2])
            won = this.chart[1][1];

        for(let a=0;a<3;a++) {
            let c = this.chart[a][0];

            for (let b = 1; b < 3; b++) {

                if(c!=this.chart[a][b]) {
                    c = false;
                    break;
                }
            }
            if(c) {
                won = c;
                break;
            }
        }
        for(let a=0;a<3;a++) {
            let c = this.chart[0][a];

            for (let b = 1; b < 3; b++) {

                if(c!=this.chart[b][a]) {
                    c = false;
                    break;
                }
            }
            if(c) {
                won = c;
                break;
            }
        }

        return won? won:null;
    }

    noMoreTurns() {
        return this.chart.every(c=>c.every(y=>y!==null));
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.chart[rowIndex][colIndex] === null)
            return null;

        return (this.chart[rowIndex][colIndex]);
    }
}

module.exports = TicTacToe;