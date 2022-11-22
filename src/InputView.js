// @ts-check

const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const  generateRandomNumber  = require("./BridgeMaker");
const BridgeMaker = require('./BridgeMaker');
const generateNum = require('./BridgeRandomNumberGenerator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
  */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요. : ',
      input => {
        const numberInput = Number(input)
        console.log(input);
        if (isNaN(numberInput)) {
          callback("[ERROR] 숫자만 입력해주세요");
          return;
        }

        if (numberInput < 1 || numberInput > 20) {
          callback( "[ERROR] 한정된 숫자를 넣어주세요");
          return;
        }
        callback(null, numberInput);
      })
  },
  // 임시로 난수를 생성하여 0, 1를 받는다.
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
      MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)',
        input => {
          // 여기에서 err 가 아니라는 건데 넣어 준거 아님?
          if (input != 'U' && input != 'D') {
            callback("[ERROR] 정확한 오더를 내려주세요");
            return
          }
          callback(null,input);
        })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) { 
      MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
        input => {
          if (input != 'R' && input != 'Q') {
            callback("[ERROR] 정확한 오더를 내려주세요 제발");
            return
          }
          /* retry : R , finish : Q */
          callback(null,input)
        })
  },
};

module.exports = InputView;
