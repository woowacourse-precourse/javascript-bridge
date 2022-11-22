const MissionUtils = require("@woowacourse/mission-utils");
const Script = require("./Script");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const Validation = require("./Validation");
const START = 1;

const InputView = {
  
  readBridgeSize() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine(`${Script.BRIDGELENGTHINPUT}\n`, (answer) => {
        try {
          Validation.inputNumber(answer);
        } catch {
          this.readBridgeSize();
        }
        const bridge = BridgeMaker.makeBridge(answer, BridgeRandomNumberGenerator);
        resolve(bridge);
      })
    })
  },
  
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
  readGameCommand() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine(`${Script.RETRY}\n`, (answer) => {
        resolve(answer);
      })
    })
  },
};

module.exports = InputView;
