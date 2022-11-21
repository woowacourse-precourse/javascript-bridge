const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { generateRandomNumber } = require("./BridgeMaker");
const BridgeMaker = require('./BridgeMaker');
const generateNum = require('./BridgeRandomNumberGenerator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
  */

  readBridgeSize() {
    return new Promise(res => {
      MissionUtils.Console.readLine('다리의 길이를 입력해주세요. : ',
        input => {
          if (isNaN(Number(input))) {
            throw new Error("[ERROR] 숫자만 입력해주세요");
          }

          if (input < 1 || input > 20) {
            throw new Error("[ERROR] 한정된 숫자를 넣어주세요");
          }
          let BridgeArray = BridgeMaker.makeBridge(input, generateNum);

          console.log(BridgeArray);

          res(BridgeArray);
        })
    });
  },
  // 임시로 난수를 생성하여 0, 1를 받는다.
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(BridgesGameStart,turns) {
    return new Promise(res => {
      MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)',
        input => {
          console.log("input is : ", input);
          if (input != 'U' && input != 'D') {
            throw new Error("[ERROR] 정확한 오더를 내려주세요");
          }
          /*
          upper 1
          downer 0
          */
          let select = 0;
          if (input == 'U') select = 1;
          else if (input == 'D') select = 0;
          console.log(select,turns);
          let answer = BridgesGameStart.move(select,turns);
          res(answer);
        })
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(BridgesGameStart) { 
    return new Promise(res => {
      MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
        input => {
          if (input != 'R' && input != 'Q') {
            throw new Error("[ERROR] 정확한 오더를 내려주세요");
          }
          /* retry : R , finish : Q */
          let answer = BridgesGameStart.retry(input);
          res(answer);
        })
    });
  },
};

module.exports = InputView;
