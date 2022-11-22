const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    this.startMessage();
  }

  startMessage() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  }
}

module.exports = App;
