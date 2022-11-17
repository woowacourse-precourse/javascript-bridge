const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const { MESSAGE } = require('./utils/constants');

class Player {
  // - 다리의 길이 입력 받는다.
  inputBridgeSize() {
    OutputView.printMessage(MESSAGE.startGame);
    InputView.readBridgeSize();
  }
  // - 위, 아래 중 이동할 칸 입력 받는다.
  // - 재시작 또는 종료 여부 입력 받는다.
}

module.exports = Player;
