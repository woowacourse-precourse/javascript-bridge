/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (size) => {
      if(BridgeMaker.size < 3 || BridgeMaker.size >20 || !Number.isInteger(size)){
        throw Error('[ERROR] 다리 길이는 3 ~ 20 사이의 숫자여야 합니다. ');
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요.(위: U, 아래: D', (move) => {
      if(move !== U && move !== D ){
        throw Error('[ERROR] 이동을 위해 U 나 D 를 입력해주세요. ');
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요.(재시도 : R, 종료 : Q ', (reset) => {
      if(reset !== R && reset !==Q){
        throw Error('[ERROR] 게임 재시작을 위해 R 혹은 종료를 위해 Q를 입력해주세요. ');
      }
    });
  },
};

module.exports = InputView;

