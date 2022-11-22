const OutputView = require('../view/OutputView');
const Validation = require('../model/Validaion');
const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const { BRIDGESIZE_KEY, MOVEMENT_KEY, COMMAND_KEY } = require('../constant/Key');

class BridgeProcess {
  #outputView = OutputView;
  #gameReport = new BridgeGame();
  #inputView = InputView;

  start() {
    this.#outputView.printStart();
    this.#inputBridgeSize();
  }

  #inputBridgeSize() {
    this.#inputView.readBridgeSize((bridgeSize) => {
      const isBridgeSize = this.checkValidation(BRIDGESIZE_KEY, bridgeSize);
      this.#bridgeSizeOptions.get(typeof isBridgeSize === 'string')(bridgeSize);
    });
  }

  checkValidation(key, checkElement) {
    try {
      return new Validation(key.CHECK_VALIDATION, checkElement).showResult();
    } catch (error) {
      this.#outputView.printError(error);
      return false;
    }
  }

  #bridgeSizeOptions = new Map([
    [
      true,
      (bridgeSize) => {
        this.#gameReport.round.total === 1 ? this.#gameReport.makeBridgeInfo(bridgeSize) : '';
        this.#inputMoving();
      },
    ],
    [
      false,
      () => {
        this.#inputBridgeSize();
      },
    ],
  ]);

  #inputMoving() {
    this.#inputView.readMoving((movement) => {
      const move = this.checkValidation(MOVEMENT_KEY, movement);
      this.#movementOptions[typeof move === 'string'](movement);
    });
  }

  #movementOptions = {
    true: (movement) => {
      this.#printMoving(movement);
    },
    false: () => {
      this.#inputMoving();
    },
  };

  #printMoving(movement) {
    const [match, { sucess, process }] = this.#gameReport.move(movement);
    this.#outputView.printMap(match);
    [...this.#mmovementResultOptions].filter(([key, nextStep]) =>
      key.sucess === sucess && key.process === process ? nextStep(sucess, match) : ''
    );
  }

  #mmovementResultOptions = new Map([
    [
      { sucess: true, process: false },
      (sucess, match) => {
        this.#printFinalResult(sucess, match);
      },
    ],
    [
      { sucess: false, process: true },
      () => {
        this.#inputMoving();
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
    this.#inputView.readGameCommand((command) => {
      const isCommand = this.checkValidation(COMMAND_KEY, command);
      this.#commandOtions.get(isCommand)(match);
    });
  }

  #commandOtions = new Map([
    [
      COMMAND_KEY.RESTART,
      () => {
        this.#gameReport.retry();
        this.#inputMoving();
      },
    ],
    [
      COMMAND_KEY.QUIT,
      (match) => {
        this.#printFinalResult(false, match);
      },
    ],
    [
      false,
      (match) => {
        this.#inputGameCommand(match);
      },
    ],
  ]);

  #printFinalResult(sucess, match) {
    this.#outputView.printResult(sucess, this.#gameReport.round.total, match);
  }
}

module.exports = BridgeProcess;
