const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    //게임 시작 문구 출력
    OutputView.startGame();
    //다리길이 입력받기
    const bridgeSize = InputView.readBridgeSize();
    //다리길이 생성
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate()
    );
    //이동할 칸 입력받기
    const userMoving = InputView.readMoving();
    //다리 비교하기
    const bridgeGame = new BridgeGame();
    const matchBridge = bridgeGame.match(userMoving, bridge);
    const moveBridge = bridgeGame.move();
    //결과 출력하기
    const printMap = OutputView.printMap(moveBridge);
    OutputView.printResult(printMap, bridgeGame.result, bridgeGame.count);
  }
}

const app = new App();
app.play();

module.exports = App;
