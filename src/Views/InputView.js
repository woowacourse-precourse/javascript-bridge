const InterfaceView = require('./InterFaceView');
const View = require('./View');

const InputView = class {
  constructor() {
    this.view = new View();
  }
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(query, callback) {
    this.view.readLine(query, callback);
  }

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {}

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {}
};

module.exports = InputView;
