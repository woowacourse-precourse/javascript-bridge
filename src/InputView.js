/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
//  제공된 InputView 객체를 활용해 구현해야 한다.
//  InputView의 파일 경로는 변경할 수 있다.
//  InputView의 메서드의 인자는 변경할 수 있다.
//  사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(setBridge, process3) {
    Console.readLine(`다리의 길이를 입력해주세요.`, (input) => {
      const size = parseInt(input, 10);
      const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

      setBridge(bridge);
      process3();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move, process4) {
    Console.readLine(`이동할 칸을 선택해주세요. (위: U, 아래: D)`, (upOrDown) => {
      move(upOrDown);
      process4();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(retry, quit) {
    Console.readLine(
      `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)`,
      (restartOrQuit) => {
        if (restartOrQuit === 'R') {
        } else {
        }
      },
    );
  },
};

module.exports = InputView;
