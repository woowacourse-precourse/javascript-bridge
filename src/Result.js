const OutputView = require("./OutputView");

class Result {
    constructor() {
        this.outputView = OutputView;
        this.upArr = [];
        this.downArr = [];
    }

    compare(answer, input) {
        if(answer === input) return "O";
        return "X";
    }

    addResult(result, inputMoving) {
        if(inputMoving === 'U') {
            this.upArr.push(result);
            this.downArr.push(" ");
        }
        if(inputMoving === 'D') {
            this.upArr.push(" ");
            this.downArr.push(result);
        }
    }

    printResult() {
        this.outputView.printMap([this.upArr, this.downArr])
    }

    printFinalResult(isSuccess, attempts) {
        this.outputView.printResult([this.upArr, this.downArr], isSuccess, attempts)
    }
}

module.exports = Result;