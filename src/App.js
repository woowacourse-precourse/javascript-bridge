const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
    COUNT = 0;
    BRIDGE = [];

    play() {
        this.start();
    }
    /**
     * 게임 시작 메시지 출력 후 다리 길이를 입력 받아 다리 생성
     */
    async start() {
        OutputView.printHello();
        let length = await InputView.readBridgeSize();
        this.BRIDGE = BridgeMaker.makeBridge(
            length,
            BridgeRandomNumberGenerator
        );
    }
}

module.exports = App;
