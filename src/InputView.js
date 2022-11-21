const MissionUtils = require("@woowacourse/mission-utils");
const BridgeError = require("./BridgeError");
const BridgeMaker = require("./BridgeMaker");
const RandomNumber = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(bridgeLength) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", (input) => {
      try {new BridgeError.BridgeError(+input)} catch (errorMSG) {MissionUtils.Console.print(errorMSG);};
      bridgeLength(+input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(nextMove) {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", (input) => {
      try {new BridgeError.MoveError(input.toUpperCase())} catch (errorMSG) {MissionUtils.Console.print(errorMSG);};
      nextMove(input.toUpperCase());
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(selectRestartEnd) {
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)", (input) => {
      try {new BridgeError.SelectOptionError(input.toUpperCase())} catch (errorMSG) {MissionUtils.Console.print(errorMSG);};
      selectRestartEnd(input.toUpperCase());
    });
  },
};

module.exports = InputView;
