// @ts-check

const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const  generateRandomNumber  = require("./BridgeMaker");
const BridgeMaker = require('./BridgeMaker');
const generateNum = require('./BridgeRandomNumberGenerator');

// 자 그러면 한가지 더 제약사항을 걸겠습니다
// 그럼요
/**
 * @returns {number}
 */
function returnOne() { // 이 함수 내용 수정 가능
  return 1; // 왜 배열밖에 안돼요
}
const asd = [returnOne()] // 수정 불가능
console.log(asd) // 수정 가능

// 이러면 어떻게되겠어요
// 간단하잖아요
// 왜 꼭 returnOne 안에서 배열을 만들어야해요
// 밖에서 만들면 되지

// 근데 그러면 여기서 1이 출력되겠죠 [1]이 아니라
// 그러면 [1]을 출력하려면 어떻게해야되겠어요
// 원하는것: 1이 담긴 배열 출력

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
  */

  readBridgeSize() {
    return new Promise((res,rej) => {
      MissionUtils.Console.readLine('다리의 길이를 입력해주세요. : ',
        input => {
          const numberInput = Number(input)
          console.log(input);
          if (isNaN(numberInput)) {
            rej("[ERROR] 숫자만 입력해주세요");
            return
          }

          if (numberInput < 1 || numberInput > 20) {
            rej("[ERROR] 한정된 숫자를 넣어주세요");
            return
          }
          res(numberInput);
        })
    });
  },
  // 임시로 난수를 생성하여 0, 1를 받는다.
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    return new Promise((res, rej) => {
      MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)',
        input => {
         // console.log("input is : ", input);
          if (input != 'U' && input != 'D') {
            rej("[ERROR] 정확한 오더를 내려주세요");
            return
          }
          res(input);
        })
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() { 
    return new Promise((res, rej) => {
      MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
        input => {
          if (input != 'R' && input != 'Q') {
            rej("[ERROR] 정확한 오더를 내려주세요 제발");
            return
          }
          /* retry : R , finish : Q */
          res(input)
        })
    });
  },
};

module.exports = InputView;
