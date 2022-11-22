const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const ServiceMessages = require('./ServiceMessages');
const Validator = require('./Validator');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

const validator = new Validator();
const bridgeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  tryCount: 1,
  totalCount: 1,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(
      ServiceMessages.GET_BRIDGE_LENGTH,
      (bridgeSize) => {
        try {
          validator.checkBridgeSize(bridgeSize);
        } catch (error) {
          OutputView.printErrorMessages(error);
          this.readBridgeSize();
        }
        this.bridgeSize = bridgeSize;

        this.bridge = BridgeMaker.makeBridge(
          this.bridgeSize,
          BridgeRandomNumberGenerator.generate
        );
        this.readMoving();
      }
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(ServiceMessages.SELECT_SPACE, (upOrDown) => {
      try {
        validator.checkUserMoving(upOrDown);
      } catch (error) {
        OutputView.printErrorMessages(error);
        this.readBridgeSize();
      }

      this.moving = upOrDown;

      const result = bridgeGame.move(this.moving, this.bridge);
      if (result === 'X') {
        OutputView.printMap(
          result,
          this.moving,
          this.tryCount,
          this.totalCount
        );
        this.tryCount = 1;
        OutputView.printResult('실패', this.totalCount);
        InputView.readGameCommand();
      }
      if (result === 'O') {
        OutputView.printMap(
          result,
          this.moving,
          this.tryCount,
          this.totalCount
        );
        this.tryCount += 1;
        this.bridge.shift();
      }

      if (this.bridge.length === 0) {
        this.tryCount = 1;
        OutputView.printResult('성공', this.totalCount);
        this.readGameCommand();
      } else {
        this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(ServiceMessages.RETRY, (restartOrQuit) => {
      try {
        validator.checkRestartOrQuit(restartOrQuit);
      } catch (error) {
        OutputView.printErrorMessages(error);
        this.readBridgeSize();
      }
      if (bridgeGame.retry(restartOrQuit)) {
        this.totalCount += 1;
        this.readMoving();
      } else {
        MissionUtils.Console.close();
      }
    });
  },
};

module.exports = InputView;
