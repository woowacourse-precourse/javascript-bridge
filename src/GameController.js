const { COMMAND, GAME_STATUS } = require('./utils/constants');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Bridge = require('./model/Bridge');
const BridgeGame = require('./model/BridgeGame');
const History = require('./model/History');

class GameController {
  #bridgeGame;
  #history;

  load() {
    OutputView.printStart();
    InputView.readBridgeSize(this.setGame.bind(this));
  }

  setGame({ command }) {
    this.#bridgeGame = new BridgeGame(new Bridge(command));
    this.#history = new History();

    OutputView.printNewLine();
    InputView.readMoving(this.playGame.bind(this));
  }

  playGame({ command }) {
    const { moveSuccess, gameStatus } = this.#bridgeGame.move(command);
    OutputView.printMap(this.#history.updateMoveTrace(command, moveSuccess));

    this.handleMove(gameStatus);
  }

  handleMove(gameStatus) {
    if (gameStatus === GAME_STATUS.WIN) {
      OutputView.printResult(this.#history.getHistory(), gameStatus);
      InputView.closeView();
    } else if (gameStatus === GAME_STATUS.FAIL) {
      InputView.readGameCommand(this.handleGameCommand.bind(this));
    } else if (gameStatus === GAME_STATUS.PLAYING) {
      InputView.readMoving(this.playGame.bind(this));
    }
  }

  handleGameCommand({ command }) {
    if (command === COMMAND.RESTART) {
      this.handleRestart();
    } else if (command === COMMAND.QUIT) {
      this.handleQuit();
    }
  }

  handleRestart() {
    this.#bridgeGame.retry();
    this.#history.resetHistory();

    InputView.readMoving(this.playGame.bind(this));
  }

  handleQuit() {
    OutputView.printResult(this.#history.getHistory(), this.#bridgeGame.getGameStatus());
    InputView.closeView();
  }
}

module.exports = GameController;
