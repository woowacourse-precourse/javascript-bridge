const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumber = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Player {
    createBridgeAnswer() {
        OutputView.printInputSize();
        const size = InputView.readBridgeSize();
        const generator = BridgeRandomNumber.generate;
        const bridgeAnswer = BridgeMaker.makeBridge(size, generator);

        return bridgeAnswer;
    }

    checkIncludeFail(currentBridge) {
        if(currentBridge[0].includes('X') || currentBridge[1].includes('X')) {
            return false;
        }
        return true;
    }

    repeatMove(bridgeAnswer, bridgeGame) {
        let currentBridge;
        let isSuccessed = true;

        for(let i = 0; i < bridgeAnswer.length; i++) {
            currentBridge = this.moveAndPrint(bridgeGame);
            if (!this.checkIncludeFail(currentBridge)) {
                isSuccessed = false;
                break;
            }
        }
        return [isSuccessed, currentBridge];
    }

    moveAndPrint(bridgeGame) {
        OutputView.printInputMove();
        const movingInput = InputView.readMoving();
        const currentBridge = bridgeGame.move(movingInput);
        OutputView.printMap(currentBridge);

        return currentBridge;
    }

    playGame(bridgeAnswer, bridgeGame) {
        const moveResult = this.repeatMove(bridgeAnswer, bridgeGame);

        if (moveResult[0] === false) {
            const isRetried = this.getGameCommandInput(bridgeGame);
            if (isRetried) {
                this.setNewGame(bridgeGame);
                this.playGame(bridgeAnswer, bridgeGame);
                return;
            }
        }
        this.getTotalGameResult(bridgeGame, moveResult);
    }

    getGameCommandInput(bridgeGame) {
        OutputView.printInputRetry();
        const gameCommandInput = InputView.readGameCommand();
        const isRetried = bridgeGame.retry(gameCommandInput);

        return isRetried;
    }

    getTotalGameResult(bridgeGame, moveResult) {
        const isSuccessed = moveResult[0];
        const currentBridge = moveResult[1];
        const tryCount = bridgeGame.getTryCount();

        if(currentBridge) {
            OutputView.printTotalGameResult(currentBridge, isSuccessed, tryCount);
        }
    }

    setNewGame(bridgeGame) {
        bridgeGame.setCurrentBridge([[],[]]);
        bridgeGame.setCurrent(0);
    }

    setBridgeGame(bridgeAnswer) {
        const bridgeGame = new BridgeGame(bridgeAnswer); //
        return bridgeGame;
    }

}


module.exports = Player;