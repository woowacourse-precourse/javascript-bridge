const { readLine } = require('./Utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {},

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(game) {
    readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', type => {
      const IS_UP = type === 'U';
      const IS_DOWN = type === 'D';

      if (IS_UP || IS_DOWN) {
        game.move(type);
        readMoving(move);
      } else {
        throw new Error('U, D 만 입력 가능 합니다.');
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
