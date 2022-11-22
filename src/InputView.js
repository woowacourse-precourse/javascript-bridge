const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, ERROR_MESSAGE } = require("./Constant");


/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
 
  /** 2. 다리 길이 입력 문구 출력 및 입력 */
  readBridgeSize(callback) {
    Console.readLine(GUIDE_MESSAGE.INPUT_LENGTH, callback);
  },

  /** 4. 사용자에게 이동할 칸 입력 및 값 출력 */
  readMoving(callback) {
    Console.readLine(GUIDE_MESSAGE.INPUT_MOVE, callback);
  },

  // /**4-1. 이동할 칸 movingInput에 담기*/
  // inputMoving(bridgeArr) {
  //   let movingInput;
  //   this.readMoving()
  //   .then(value => {
  //     movingInput = value;
  //   }).catch(error => Console.print(error.message));
  //   return movingInput;
  // },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * 8. 재시도 여부 입력
   */
  readGameCommand() {
    return new Promise((resolve, reject) =>
    Console.readLine(GUIDE_MESSAGE.INPUT_TRY, (input) => {
      const result = this.validReTryInput(input);
      if(result) {
        resolve(input);
      } else {
        reject(new Error(ERROR_MESSAGE.RE_TRY));
      }
    })
  )},

  /** 8-1. 재시도 여부 retryInput에 담기 */
  inputRetry() {
    let retryInput;
    this.readGameCommand()
    .then(value => {
      retryInput = value;
    }).catch(error => Console.print(error.message));
    return retryInput; 
  },

  

   /** 8-2. reTry 입력값 유효성 및 에러시 입력 재시작 */
   validReTryInput(input) {
    if(input !== "R" && input !== "Q") {
      return false;
    }
    return true;
  }
};

module.exports = InputView;
