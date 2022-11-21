const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const inputErrorCheck = require('./InputErrorCheck');

const bridgeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (bridgeSize) => {
      try {
        this.bridgeSizeSet(bridgeSize);
      } catch (error) {
        this.readBridgeSize();
      }
    });
  },

  readBridgeProcessor(bridgeSize) {
    try {
      inputErrorCheck.bridgeSize(bridgeSize);
      bridgeGame.set(bridgeSize);
      this.readMoving();
    } catch (error) {
      this.readBridgeSize();
    }
  },

  bridgeSizeSet(bridgeSize) {
    inputErrorCheck.bridgeSize(bridgeSize);
    bridgeGame.set(bridgeSize);
    this.readMoving();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (way) => {
      try {
        this.moveSet(way);
      } catch (error) {
        this.readMoving();
      }
    });
  },

  moveSet(way) {
    inputErrorCheck.way(way);
    const { nextInput, nextOutput, gameStatus } = bridgeGame.move(way);
    if (nextOutput) OutputView[nextOutput](gameStatus);
    if (nextInput) this[nextInput]();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      this.readGameProcessor,
    );
  },

  readGameProcessor(doOrDie) {
    try {
      inputErrorCheck.gameCommand(doOrDie);
      const { nextInput, nextOutput, gameStatus } = bridgeGame.retry(doOrDie);
      if (nextInput) this[nextInput]();
      if (nextOutput) OutputView[nextOutput](gameStatus);
    } catch (error) {
      this.readGameCommand();
    }
  },
};

module.exports = InputView;
