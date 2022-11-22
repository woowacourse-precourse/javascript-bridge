const { readLine, print, close } = require('./Utils');
const { printResult } = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(game) {
    print('다리 건너기 게임을 시작합니다.\n');
    readLine('다리의 길이를 입력해주세요.\n', size => {
      game.setBridge(Number(size));
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving({ func }) {
    readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', type => func(type));
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand({ func, that }) {
    readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', type => {
      if (type === 'Q') {
        printResult({ that, IS_SUCCESS: false });
      } else if (type === 'R') {
        func();
      }
    });
  },
};

module.exports = InputView;
