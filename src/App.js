const { readBridgeSize } = require('./Views/InputView');
const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_GAME_SENTENCE } = require('./Constant/PrintSentence');

class App {
  constructor() {
    this.bridge = [];
  }
  
  play() {
    Console.print(BRIDGE_GAME_SENTENCE.start);
    this.bridge = readBridgeSize();
    if(this.bridge === '[ERROR]') return Console.print(this.bridge);
    const bridgeGame = new BridgeGame(this.bridge);
    bridgeGame.move();
  }
}

module.exports = App;
