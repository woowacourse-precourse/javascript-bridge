const { readBridgeSize } = require('./InputView');
const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.bridge = [];
  }
  
  play() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
    this.bridge = readBridgeSize();
  }
}

module.exports = App;
