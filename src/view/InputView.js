const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constants/Message');

const InputView = {

  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.PUT_BRIDGE_LENGTH, (bridgeLength) => {
      // 예외상황 확인
      // bridgeLength를 이용하여 다리 만들기. BridgeMaker 호출.
    })
  },

  readMoving() {
    Console.readLine(INPUT_MESSAGE.PUT_NEXT_SPACE, (nextSpace) => {
      // 예외상황 확인
      //
    });
  },

  readGameCommand(retryOrNot) {
    Console.readLine(INPUT_MESSAGE.PUT_RETRY_OR_NOT, retryOrNot);
  },

};

module.exports = InputView;
