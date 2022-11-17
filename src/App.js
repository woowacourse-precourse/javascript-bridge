const InputView = require("./InputView");
const ArraySize = require("./modules/ArraySize");
class App {
  play() {
    // 다리의 길이 & 시도 횟수
    const size = InputView.readBridgeSize();
    let tryGame = 0;
    // 다리의 길이만큼의 배열 생성
    const ARRAY = new ArraySize(size);
    let arrUp = ARRAY.getArr();
    let arrDown = ARRAY.getArr();
  }
}

module.exports = App;
