const MissionUtils = require("@woowacourse/mission-utils");
const Script = require("./Script");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const START = 1;

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine(`${Script.BRIDGELENGTHINPUT}\n`, (answer) => {
        const bridge = BridgeMaker.makeBridge(answer, BridgeRandomNumberGenerator);
        resolve(bridge);
      })
    })
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine(`\n${Script.CHOICEBRIDGE}\n`, (movingDirection) => {
        resolve(movingDirection);
      })
    })
  },
  

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
