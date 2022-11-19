const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
    COUNT = 0;
    BRIDGE = [];
    GAME = new BridgeGame();

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
        this.GAME.set(this.BRIDGE);
        this.move();
    }
    async move() {
        const direction = await InputView.readMoving();
        let result = this.GAME.move(direction);
    }
}

module.exports = App;
