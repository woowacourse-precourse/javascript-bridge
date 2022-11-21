const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const TypeConverter = require('./TypeConverter');
const { MSG } = require('./libs/constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 사용자로부터 입력받기를 시작한다.
   */
  init() {
    Console.print(MSG.startGame);
    this.readBridgeSize();
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MSG.inputBridgeSize, (answer) => {
      try {
        const bridgeSize = TypeConverter.toNumber(answer);
        const bridgeGame = new BridgeGame(bridgeSize);

        this.readMoving(bridgeGame);
      } catch (e) {
        console.log(e.message);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(MSG.inputMoveDirection, (answer) => {
      try {
        const moveDirection = TypeConverter.toString(answer);
        bridgeGame.move(moveDirection);
        OutputView.printMap(bridgeGame.getMovedBridge());
      } catch (e) {
        console.log(e.message);
        this.readMoving(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
