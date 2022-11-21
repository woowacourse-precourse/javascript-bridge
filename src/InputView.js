const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readline('다리의 길이를 입력해주세요.', (size) => {
      this.exceptionOfReadBridgeSize(size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readline('이동할 칸을 선택해주세요. (위: U, 아래: D)', (space) => {
      this.exceptionOfReadMoving(space);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readline('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (game) => {
      this.exceptionOfReadGameCommand(game);
    });
  },


  ////🐹예외처리🐹////
  /**
   * 다리길이 입력받기 예외처리 
   */
  exceptionOfReadBridgeSize(){
    if(size < 3 || size > 20)
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },

  /**
   * 이동할 칸 입력받기 예외처리 
   */
  exceptionOfReadMoving(){
    if(space != 'U' || space != 'D')
      throw new Error('[ERROR] 이동할 칸은 U 또는 D여야 합니다.');
  },

  /**
   * 게임 재시작, 종료 입력받기 예외처리 
   */
  exceptionOfReadGameCommand(){
    if(space != 'R' || space != 'Q')
      throw new Error('[ERROR] 이동할 칸은 R 또는 Q여야 합니다.');
  }

};

module.exports = InputView;
