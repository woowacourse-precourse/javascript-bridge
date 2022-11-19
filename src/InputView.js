const { readLine } = require('./Utils');
const BridgeGame = require('./BridgeGame');
const { validateBridgeLength, validateMovingValue, validateEndValue } = require('./Validation');
const OutputView = require('./OutputView');

const bg = new BridgeGame();
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    readLine('다리의 길이를 입력해주세요.\n', input => {
      const size = Number(input);
      validateBridgeLength(size);
      bg.setGame(size);
      readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', this.readMoving.bind(this));
      // BridgeMaker(input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(input) {
    validateMovingValue(input);

    if (bg.move(input)) {
      OutputView.printMap(bg);
      return readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', this.readMoving.bind(this));
    }
    OutputView.printMap(bg);
    readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      this.readGameCommand
    );
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(input) {
    validateEndValue(input);

    if (bg.retry(input)) console.log('재시도!');
    else OutputView.printResult();
  }
};

module.exports = InputView;
