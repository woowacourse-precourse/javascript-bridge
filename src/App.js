const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');

const { GAME_MESSAGE } = require('./utils/constants');

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    Console.print(GAME_MESSAGE.startCommand);
    this.#bridgeGame.start();
  }
}

module.exports = App;
