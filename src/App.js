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
    BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate());
  }
}

module.exports = App;
