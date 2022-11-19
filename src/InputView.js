const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.\n',
  MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',

  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const bridgeSize = await new Promise(answer => {
      Console.readLine(this.BRIDGE_SIZE, answer);
    });
    this.validateBridgeSize(bridgeSize);
    return bridgeSize;
  },

  validateBridgeSize(answer) {
    if (/[^0-9]/g.test(answer)) {
      throw new Error('[ERROR] 다리 길이는 숫자로 입력해야합니다.');
    }
    if (Number(answer) < 3 || Number(answer) > 20) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const moving = await new Promise(answer => {
      Console.readLine(this.MOVING, answer);
    });
    this.validateMoving(moving);
    return moving;
  },

  validateMoving(answer) {
    if (answer !== 'U' || answer !== 'D') {
      throw new Error('[ERROR] 위 칸은 U, 아래 칸은 D로 입력해야 합니다.');
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const gameCommand = await new Promise(answer => {
      Console.readLine(this.GAME_COMMAND, answer);
    });
    this.validateGameCommand(gameCommand);
    return gameCommand;
  },

  validateGameCommand(answer) {
    if (answer !== 'U' || answer !== 'D') {
      throw new Error('[ERROR] 재시도는 R, 종료는 Q로 입력해야 합니다.');
    }
  },

};

/*
(async () => {
  let answer = await InputView.readBridgeSize();
  console.log(answer);
})()
*/

module.exports = InputView;
