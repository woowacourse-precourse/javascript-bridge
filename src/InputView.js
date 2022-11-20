const {Console} = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

const InputView = {
  readBridgeSize(app) {
    Console.readLine(`다리의 길이를 입력해주세요.\n`, (size)=>{
      Validation.checkBridgeSize(size);
      app.init(size);
    })
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
