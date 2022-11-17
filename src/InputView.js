const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker.js");
const { MESSAGE } = require("./constant/message.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

// const BridgeMaker = require("./BridgeMaker");
// const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

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
            const bridgeArray = makeBridge(size, BridgeRandomNumberGenerator.generate);
        });
    },

    /**
     * 사용자가 이동할 칸을 입력받는다.
     */
    readMoving() {},

    /**
     * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
     */
    readGameCommand() {},
};
InputView.readBridgeSize();

module.exports = InputView;
