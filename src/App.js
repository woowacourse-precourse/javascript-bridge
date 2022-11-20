const { MESSAGES } = require("./constraints/constarints");
const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./models/BridgeGame");
const { readBridgeSize, readMoving } = require("./views/InputView");

class App {
  play() {
    // 시작 메시지 출력
    Console.print(MESSAGES.START);

    // 게임 생성
    const game = new BridgeGame();

    // 다리 생성 및 다리와 게임의 연결
    readBridgeSize(game, readMoving);
  }
}

// let app = new App();
// app.play();
module.exports = App;
