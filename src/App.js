const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const GameStart = require("./modules/GameStart");
const OutputView = require("./OutputView");
class App {
  size;
  tryGame = 1; // 시도 횟수
  #answer;
  #randomArr = [];
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
    // 이동할 칸(U,D)을 입력한다.
    const upOrDown = InputView.readMoving(this.size);
    // 다리 배열 생성
    const [arrUp, arrDown] = BridgeMaker.changeRandomArray(this.#randomArr);
    // 게임 시작
    const GAMESTART = new GameStart(upOrDown, arrUp, arrDown);
    this.#answer = GAMESTART.getAnswer();
    const bridgeArr = GAMESTART.getBrigeArr();
    //게임 재시작
    this.restart(this.#answer);
    //출력
    OutputView.printResult(bridgeArr, this.tryGame);
  }

  restart(answer) {
    if (answer) {
      this.play();
      this.tryGame += 1;
    }
  }
}

module.exports = App;
