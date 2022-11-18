const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const GameStart = require("./modules/GameStart");
class App {
  size;
  tryGame = 1;
  #answer;
  constructor() {
    // 다리의 길이 & 시도 횟수
    this.size = InputView.readBridgeSize();
  }
  play() {
    // 이동할 칸(U,D)을 입력한다.
    const upOrDown = InputView.readMoving(this.size);
    // 다리 생성
    const randomArr = BridgeMaker.makeBridge(
      this.size,
      BridgeRandomNumberGenerator.generate
    );
    const [arrUp, arrDown] = BridgeMaker.changeRandomArray(randomArr);
    // 게임 시작
    const GAMESTART = new GameStart(upOrDown, arrUp, arrDown);
    this.#answer = GAMESTART.getAnswer();
    const bridgeArr = GAMESTART.getBrigeArr();
    //게임 재시작
    this.restart(this.#answer);
  }

  restart(answer) {
    if (answer) {
      this.play();
      this.tryGame += 1;
    } else return 0;
  }
}

module.exports = App;
