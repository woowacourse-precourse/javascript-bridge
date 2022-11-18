const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message.js");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
    /**
     * 다리의 길이를 입력받는다.
     */
    readBridgeSize() {
        console.log("InputView.readBridgeSize-----------");
        Console.readLine(MESSAGE.SIZE, (size) => {
            const bridgeGame = new BridgeGame(makeBridge(size, generate));
            console.log(bridgeGame.bridgeArray);
            this.readMoving(bridgeGame);
        });
    },

    /**
     * 사용자가 이동할 칸을 입력받는다.
     */
    readMoving(bridgeGame) {
        console.log("InputView.readMoving-----------");
        Console.readLine(MESSAGE.MOVE, (move) => {
            if (bridgeGame.isBadMove(move)) {
                this.readGameCommand(bridgeGame);
            }
        });
    },

    /**
     * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
     */
    readGameCommand(bridgeGame) {
        console.log("InputView.readGameCommand-----------");
        Console.readLine(MESSAGE.RESTART, (answer) => {
            if (bridgeGame.retry(answer)) {
                this.readMoving(bridgeGame);
            }
            bridgeGame.finish();
        });
    },
};

module.exports = InputView;
