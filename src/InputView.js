const MissionUtils = require("@woowacourse/mission-utils");
const Vaildation = require("./Vaildation");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  MINIMUM_BRIDGE_SIZE: 3,
  MAXIMUM_BRIDGE_SIZE: 20,

  INPUT_UP_MOVING: 'U',
  INPUT_DOWN_MOVING: 'D',

  INPUT_RESTART: 'R',
  INPUT_QUIT: 'Q',

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize( callback ) {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
      answer = Number(answer);
      try {
        vaildation_bridgeSize(answer);
      } catch (e) {
        MissionUtils.Console.print(e);
        InputView.readBridgeSize( callback );
        return;
      }
      callback(answer);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving( callback ) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (answer) => {
      try {
        Vaildation.one_of_candidates(answer, [this.INPUT_UP_MOVING, this.INPUT_DOWN_MOVING]);
      } catch (e) {
        MissionUtils.Console.print(e);
        InputView.readMoving( callback );
        return;
      }
      callback(answer);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand( callback ) {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (answer) => {
      try {
        Vaildation.one_of_candidates(answer, [this.INPUT_RESTART, this.INPUT_QUIT]);
      } catch (e) {
        MissionUtils.Console.print(e);
        InputView.readGameCommand( callback );
        return;
      }
      callback(answer);
    });
  },
};

function vaildation_bridgeSize(size) {
  Vaildation.isNumber(size);
  Vaildation.inRange(Number(size), InputView.MINIMUM_BRIDGE_SIZE, InputView.MAXIMUM_BRIDGE_SIZE);
}

module.exports = InputView;
