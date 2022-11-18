const InputView = require("./InputView");
const ArraySize = require("./modules/ArraySize");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class App {
  play() {
    // 다리의 길이 & 시도 횟수
    const size = InputView.readBridgeSize();
    let tryGame = 0;
    // 다리의 길이만큼의 배열 생성
    const ARRAY = new ArraySize(size);
    let arrUp = ARRAY.getArr();
    let arrDown = ARRAY.getArr();
    // 0,1 무작위 값 설정
    let randomArr = ARRAY.getArr().map(
      (e) => (e = BridgeRandomNumberGenerator.generate())
    );
  }
}

module.exports = App;
