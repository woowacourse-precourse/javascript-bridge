const { readLine, close } = require('./Utils');
const BridgeGame = require('./BridgeGame');
const { validateBridgeLength, validateMovingValue, validateEndValue } = require('./Validation');
const OutputView = require('./OutputView');
const { RIDGE_LENGTH_MESSAGE, MOVE_MESSAGE, RETRY_MESSAGE } = require('./constants/Message');
const bg = new BridgeGame();

const InputView = {
  readBridgeSize() {
    readLine(RIDGE_LENGTH_MESSAGE, this.onInputBridge.bind(this));
  },

  onInputBridge(input) {
    const size = Number(input);
    validateBridgeLength(input);
    bg.initGame(size);
    readLine(MOVE_MESSAGE, this.readMoving.bind(this));
  },

  readMoving(input) {
    validateMovingValue(input);
    const correct = bg.isCorrect(input);

    bg.move(input, correct);
    OutputView.printMap(bg);

    if (!correct) {
      return readLine(RETRY_MESSAGE, this.readGameCommand.bind(this));
    }

    if (bg.isFinish()) {
      OutputView.printResult(bg);
      close();
    } else {
      readLine(MOVE_MESSAGE, this.readMoving.bind(this));
    }
  },

  readGameCommand(input) {
    validateEndValue(input);

    if (bg.retry(input)) return readLine(MOVE_MESSAGE, this.readMoving.bind(this));

    OutputView.printResult(bg);
    close();
  }
};

module.exports = InputView;
