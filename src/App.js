const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  play() {
    Console.print(`다리 건너기 게임을 시작합니다.`);
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
