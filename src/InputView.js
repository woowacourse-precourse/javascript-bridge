const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.", (answer) => {
      return this.validateSizeInput(answer);
    });
  },

  validateSizeInput(answer) {
    if(!parseInt(answer)) throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.")
    let size = parseInt(answer);
    if(size < 3 || size > 20) throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.")
    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", (answer) => {
      return this.validateMovingInput(answer);
    });
  },

  validateMovingInput(answer) {
    if(!(answer === 'U' || answer === 'D')) throw new Error("[ERROR] 잘못 입력하였습니다. (위: U, 아래: D)")
    return answer;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)", (answer) => {
      return this.validateGamaCommandInput(answer);
    });
  },

  validateGamaCommandInput(answer) {
    if(!(answer === 'R' || answer === 'Q')) throw new Error("[ERROR] 잘못 입력하였습니다. ((재시도: R, 종료: Q)")
    return answer;
  }
};

module.exports = InputView;
