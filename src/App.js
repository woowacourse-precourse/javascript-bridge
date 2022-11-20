const { Console } = require("@woowacourse/mission-utils");
const InputView = require('./InputView.js');

const GAME_START_SENTENCE = '다리 건너기 게임을 시작합니다.\n'

class App {
  play() {
    Console.print(GAME_START_SENTENCE);

    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
