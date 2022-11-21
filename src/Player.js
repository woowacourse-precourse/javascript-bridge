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

    repeatMove(bridgeAnswer) {
        const bridgeGame = new BridgeGame(bridgeAnswer);
        let isSuccessed = true;

        for(let i = 0; i < bridgeAnswer.length; i++) {
            OutputView.printInputMove();
            const movingInput = InputView.readMoving();
            const currentBridge = bridgeGame.move(movingInput);
            OutputView.printMap(currentBridge);
            if (!this.checkIncludeFail(currentBridge)) {
                isSuccessed = false;
                break;
            }
        }
    }

}


module.exports = Player;