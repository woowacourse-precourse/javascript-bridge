const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../bridge/BridgeGame.js');
const OutputView = require('./OutputView.js');
const CONSTANT = require('../constants/Constant.js');
const Validator = require('./Validator.js');

const bridge = new BridgeGame();

const InputView = {
  readBridgeSize() {
    Console.readLine('\n다리의 길이를 입력해주세요.\n', answer => {
      Validator.validateBridgeSize.call(this, +answer);
      bridge.setBridge(answer);
      Console.print('');
      this.readMoving();
    });
  },

  readMoving() {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', answer => {
      Validator.validateDirection.call(this, answer);
      bridge.move(answer);
      OutputView.printMap(bridge);

      if (bridge.detectWinner()) OutputView.printResult(bridge);
      else if (bridge.isPlaying) this.readMoving();
      else this.readGameCommand();
    });
  },

  readGameCommand() {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', answer => {
      const { RESTART } = CONSTANT.RESTART;

      Validator.validateRestart.call(this, answer);

      if (answer === RESTART) {
        bridge.retry();
        this.readMoving();
      } else OutputView.printResult(bridge);
    });
  },
};

module.exports = InputView;
