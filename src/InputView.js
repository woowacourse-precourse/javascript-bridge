/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./Constants/Constants");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    const gameRec = { moveNum: 0, attemptNum: 1, bridgeAnswer: [] };
    MissionUtils.Console.readLine(MESSAGES.ENTER_SIZE, inputLen => {
      gameRec.bridgeAnswer = BridgeMaker.makeBridge(inputLen, BridgeRandomNumberGenerator.generate);
      gameRec.bridgeOutput = { firstBridge: "", secondBridge: "" };
      this.readMoving(gameRec); // moveNum, attemptNum, bridgeAnswer, bridgeOutput
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
