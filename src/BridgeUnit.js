const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./OutputView');

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

    emptyConsole() {
        Console.print('');
    }

    closeConsole() {
        Console.close();
    }

    bridgeConsole(result) {
        Console.print(result);
    }
}

module.exports = BridgeUnit;