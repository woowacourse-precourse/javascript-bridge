// - 제공된 `InputView` 객체를 활용해 구현해야 한다.
// - `InputView`의 파일 경로는 변경할 수 있다.
// - `InputView`의 메서드의 인자는 변경할 수 있다.
// - 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback, callback2) {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n',(input)=>{
      return callback.call(this, input, callback2);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback, callback2) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n',(input)=>{
      MissionUtils.Console.close();
      callback(input);
      return callback2.call(this, input)
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
