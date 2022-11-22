const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  BRIDGE_GAME: undefined,

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      this.validateBridge(size);

      const BRIDGE = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      this.BRIDGE_GAME = new BridgeGame(BRIDGE);
    })
  },

  validateBridge(size) {
    if (size < 3 || size > 20)
      throw Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (moving) => {
      this.validateInput(moving);

      this.BRIDGE_GAME.move(moving) ? this.readMoving() : this.readGameCommand(); 
    })
  },

  validateInput(moving) {
    if (moving !== 'U' && moving !== 'D')
      throw Error('[ERROR] 이동할 칸은 U 또는 D만 입력 가능 합니다.');
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    this.BRIDGE_GAME.initValue();

    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
      this.validateAnswer(answer);
      answer === 'R' ? this.BRIDGE_GAME.retry() : OutputView.printResult();
    })
  },

  validateAnswer(answer) {
    if (answer !== 'R' && answer !== 'Q')
      throw Error('[ERROR] 게임 종료 후 R 또는 Q만 입력 가능 합니다.');
  }
};

module.exports = InputView;
