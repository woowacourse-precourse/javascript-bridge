const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const GameStart = require("./modules/GameStart");
const OutputView = require("./OutputView");
const ArraySize = require("./modules/ArraySize");
class App {
  static size;
  tryGame = 1; // 시도 횟수
  #randomArr;
  constructor() {
    // 다리의 길이
    this.size = InputView.readBridgeSize();
    // 다리 생성
    this.#randomArr = BridgeMaker.makeBridge(
      this.size,
      BridgeRandomNumberGenerator.generate
    );
  }
  play() {
    const upOrDown = InputView.readMoving(this.size);
    // 다리 배열 생성
    const ARRAY = new ArraySize();
    const [arrUp, arrDown] = ARRAY.changeRandomArray(this.#randomArr);
    // 게임 시작
    const bridgeArr = this.gameStart(upOrDown, arrUp, arrDown);
    OutputView.printResult(bridgeArr, this.tryGame);
  }
  gameStart(upOrDown, arrUp, arrDown) {
    const GAMESTART = new GameStart(upOrDown, arrUp, arrDown);
    const answer = GAMESTART.getAnswer();
    const bridgeArr = GAMESTART.getBrigeArr();
    //게임 재시작
    this.restart(answer);
    return bridgeArr;
  }
  restart(answer) {
    if (answer) {
      this.play();
      this.tryGame += 1;
    }
  }
}

module.exports = App;
