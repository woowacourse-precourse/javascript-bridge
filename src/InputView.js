const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { STATE } = require('./Constant');
const { printMap, printResult } = require('./OutputView');

const MESSAGE = Object.freeze({
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_GAME_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, (input) => {
      this.bridge = makeBridge(input, generate);
      this.bridgeGame = new BridgeGame(this.bridge);
      this.flowController(this.bridgeGame.state);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const { bridgeGame } = this;

    Console.readLine(MESSAGE.INPUT_MOVING, (input) => {
      bridgeGame.move(input);
      bridgeGame.drawMap(input);
      printMap(bridgeGame.moveMap);
      this.flowController(bridgeGame.state);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.INPUT_GAME_COMMAND, (input) => {
      this.flowController(input);
    });
  },

  flowController(state) {
    switch (state) {
      case STATE.START:
        return this.readBridgeSize();
      case STATE.MOVE:
        return this.readMoving();
      case STATE.FAIL:
        return this.readGameCommand();
      case STATE.RETRY:
        return this.bridgeGame.retry();
    }
    printResult(this.bridgeGame);
  },
};

module.exports = InputView;
