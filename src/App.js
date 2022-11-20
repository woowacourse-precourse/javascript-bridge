const { Console } = require("@woowacourse/mission-utils");

const GAME_START_SENTENCE = '다리 건너기 게임을 시작합니다. \n'

class App {
  play() {
    Console.print(GAME_START_SENTENCE);
  }
}

module.exports = App;
