const { readLine, print } = require('./Utils');
const BridgeGame = require('./BridgeGame');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    print('다리 건너기 게임을 시작합니다.\n');
    readLine('다리의 길이를 입력해주세요.\n', size => {
      this.readMoving(new BridgeGame(Number(size)));
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(game) {
    readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', type => {
      const IS_UP = type === 'U';
      const IS_DOWN = type === 'D';

      if (IS_UP || IS_DOWN) {
        game.move(type);
        this.readMoving(game);
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
