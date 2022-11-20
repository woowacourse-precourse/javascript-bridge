const {Console} = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { readBridgeSize, readMoving } = require("./InputView");
class App {

  play() {
    Console.print('다리 건너기 게임을 시작합니다.');
    try {
      readBridgeSize();
    } catch (e) {
      Console.print(e);
    }

    const bridgeGame = new BridgeGame();
    const input = readMoving();
    const mov = bridgeGame.move(input);
    console.log(mov);

  }
}

module.exports = App;
