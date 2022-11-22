const { readLine, close } = require('./Utils');
const BridgeGame = require('./BridgeGame');
const { validateBridgeLength, validateMovingValue, validateEndValue } = require('./Validation');
const OutputView = require('./OutputView');

const bg = new BridgeGame();

const InputView = {
  readBridgeSize() {
    readLine('다리의 길이를 입력해주세요.\n', this.onInputBridge.bind(this));
  },

  onInputBridge(input) {
    const size = Number(input);
    validateBridgeLength(input);
    bg.initGame(size);
    readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', this.readMoving.bind(this));
  },

  readMoving(input) {
    validateMovingValue(input);
    const correct = bg.isCorrect(input);

    bg.move(input, correct);
    OutputView.printMap(bg);

    if (!correct) {
      return readLine(
        '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
        this.readGameCommand.bind(this)
      );
    }

    if (bg.isFinish()) {
      OutputView.printResult(bg);
      close();
    } else {
      readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', this.readMoving.bind(this));
    }
  },

  readGameCommand(input) {
    validateEndValue(input);

    if (bg.retry(input))
      return readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', this.readMoving.bind(this));

    close();
  }
};

module.exports = InputView;
