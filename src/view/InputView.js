const MissionUtils = require('@woowacourse/mission-utils');
// const { makeBridge } = require('../BridgeMaker');
const Message = require('../constant/PrintMessage');
// const BridgeGame = require('../controller/BridgeGame');
const BridgeSize = require('../model/BridgeSize');
const Direction = require('../model/Direction');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size = 0;
    MissionUtils.Console.readLine(Message.INPUT_LENGTH, answer => {
      try {
        const bridgeSize = new BridgeSize(Number(answer));
      } catch (error) {
        MissionUtils.Console.print(error.message);
        this.readBridgeSize();
      }
      size = answer;
    });
    return size;
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
