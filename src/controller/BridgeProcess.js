const { UTILS_URL } = require('../constant/Key');
const { Console } = require(UTILS_URL);
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { ASK_MESSAGE } = require('../constant/Message');
const BridgeGame = require('./BridgeGame');

class BridgeProcess {
  #outputView = OutputView;
  #inputView = InputView;
  #gameReport;

  start() {
    this.#outputView.printStart();
    this.#process();
  }

  #process() {
    this.#gameReport = new BridgeGame();
    this.#inputBridgeSize();
  }

  #inputBridgeSize() {
    Console.readLine(ASK_MESSAGE.INPUT_BRIDGESIZE, (bridgeSize) => {
      const isBridgeSize = this.#inputView.readBridgeSize(bridgeSize);
      this.#gameReport.round.total === 1 ? this.#gameReport.makeBridgeInfo(bridgeSize) : '';
      isBridgeSize ? this.#inputMovement() : this.#inputBridgeSize();
    });
  }

  #inputMovement() {
    Console.readLine(ASK_MESSAGE.INPUT_MOVEMENT, (movement) => {
      const isMovement = this.#inputView.readMoving(movement);
      isMovement ? this.#printMovement(isMovement) : this.#inputMovement();
    });
  }

  #printMovement(movement) {
    const [match, { sucess, process }] = this.#gameReport.move(movement);
    this.#outputView.printMap(match);
    [...this.#movementOptions].filter(([key, value]) =>
      key.sucess === sucess && key.process === process ? value(sucess, match) : ''
    );
  }

  #movementOptions = new Map([
    [
      { sucess: true, process: false },
      (sucess, match) => {
        this.#printFinalResult(sucess, match);
      },
    ],
    [
      { sucess: false, process: true },
      () => {
        this.#inputMovement();
      },
    ],
    [
      { sucess: false, process: false },
      (_, match) => {
        this.#inputGameCommand(match);
      },
    ],
  ]);

  #inputGameCommand(match) {
    Console.readLine(ASK_MESSAGE.INPUT_GAMECOMMAND, (command) => {
      const isCommand = this.#inputView.readGameCommand(command);
      this.#commandOptions[isCommand](match);
    });
  }

  #commandOptions = {
    R: () => {
      this.#inputMovement();
      this.#gameReport.retry();
    },
    Q: (match) => {
      this.#printFinalResult(false, match);
    },
    false: () => {
      this.#inputGameCommand();
    },
  };

  #printFinalResult(sucess, match) {
    this.#outputView.printResult(sucess, this.#gameReport.round.total, match);
  }
}

module.exports = BridgeProcess;
