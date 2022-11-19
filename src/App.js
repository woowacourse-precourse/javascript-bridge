const { readBridgeSize } = require('./Views/InputView');
const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.bridge = [];
  }
  
  play() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
    this.bridge = readBridgeSize();
    if(this.bridge === '[ERROR]') return Console.print(this.bridge);
    const bridgeGame = new BridgeGame(this.bridge);
    bridgeGame.move();
  }
}

module.exports = App;
