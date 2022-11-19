const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
    COUNT = 0;
    BRIDGE = [];
    GAME = new BridgeGame();
    LAST_RESULT = [];

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
    /**
     * 사용자로부터 이동 입력을 받아 이동 처리
     */
    async move() {
        const direction = await InputView.readMoving();
        let result = this.GAME.move(direction);
        this.LAST_RESULT = result;
        OutputView.printMap(result);
        this.judge(result);
    }
    /**
     * 입력 결과에 따라 추가 진행인지 완료인지 재시작인지 판별
     * @param {string[]} result
     */
    judge(result) {
        if (result.at(-1).length === 2) this.retry();
        else if (result.length === this.BRIDGE.length) this.end(0);
        else this.move();
    }
    /**
     * 실패 후 재시도에 대한 입력을 받아 처리
     */
    async retry() {
        const answer = await InputView.readGameCommand();
        this.COUNT++;
        let result = this.GAME.retry(answer);
        if (result) this.move();
        else this.end(1);
    }
    /**
     * 게임 종료 후 결과 출력
     * @param {number} input
     */
    end(input) {
        OutputView.printResult(input, this.LAST_RESULT, this.COUNT);
    }
}

module.exports = App;
