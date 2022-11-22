const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Utils/Constant');
const GameController = require('./Controller/GameController');
const BridgeGame = require('./BridgeGame');
const Selected = require('./Model/Selected');
const TryCnt = require('./Model/TryCnt');

class App {
  /** @type {GameController} */
  #gameController;

  constructor() {
    this.#gameController = new GameController(new BridgeGame(new Selected(), new TryCnt()));
  }

  play() {
    Console.print(MESSAGE.GAME_START);
    this.#gameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
