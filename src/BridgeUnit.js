const OutputView = require('./view/OutputView');

class BridgeUnit {
    resultConsole() {
        OutputView.printResult();
    }

    failConsole() {
        OutputView.printFail();
    }   
    
    winConsole() {
        OutputView.printWin();
    }

    countRoundConsole(round) {
        OutputView.printAttemptCount(round);
    }
}

module.exports = BridgeUnit;