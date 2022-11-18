const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class App {
  play() {
    // 다리의 길이 & 시도 횟수
    const size = InputView.readBridgeSize();
    let tryGame = 0;

    // 이동할 칸(U,D)을 입력한다.
    const upOrDown = InputView.readMoving(size);

    // 다리 생성
    const randomArr = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    const [arrUp, arrDown] = BridgeMaker.changeRandomArray(randomArr);
  }
}

module.exports = App;
