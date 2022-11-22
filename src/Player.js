const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumber = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Player {
    createBridgeAnswer() {
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
            OutputView.printInputMove();
            const movingInput = InputView.readMoving();
            currentBridge = bridgeGame.move(movingInput);
            OutputView.printMap(currentBridge);
            if (!this.checkIncludeFail(currentBridge)) {
                isSuccessed = false;
                break;
            }
        }
        return [isSuccessed, currentBridge];
    }

    playGame(bridgeAnswer, bridgeGame) {
        const tryCount = bridgeGame.getTryCount();
        const moveResult = this.repeatMove(bridgeAnswer, bridgeGame);
        const isSuccessed = moveResult[0];
        const currentBridge = moveResult[1];

        if (isSuccessed === false) {
            const gameCommandInput = InputView.readGameCommand();
            const isRetried = bridgeGame.retry(gameCommandInput);
            if (isRetried) {
                this.setNewGame(bridgeGame);
                this.playGame(bridgeAnswer, bridgeGame);
                return;
            }
        }
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