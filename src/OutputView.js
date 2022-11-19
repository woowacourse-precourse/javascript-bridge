/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const {
  START_MESSAGE,
  MOVE_MESSAGE,
  END_MESSAGE,
  END_FAIL_MESSAGE,
  END_SUCCESS_MESSAGE,
  GAME_COUNT_MESSAGE,
  MOVE_INPUT_ERROR,
} = require('./MESSAGES/GameMessage');
const { BRIDGE_INPUT, BRIDGE_INPUT_ERROR } = require('./MESSAGES/InputMessage');

const OutputView = {
  printGameStart() {
    Console.print(START_MESSAGE);
  },

  printUserMove(Move) {
    Console.print(Move);
  },

  printBridgeSizeErr() {
    Console.print(BRIDGE_INPUT_ERROR);
  },

  printUserMoveErr() {
    Console.print(MOVE_INPUT_ERROR);
  },

  printBridgeInput() {
    Console.print(BRIDGE_INPUT);
  },

  printColumnMessage() {
    Console.print(MOVE_MESSAGE);
  },

  printBridgeSize(Size) {
    Console.print(Size);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(gameobj) {
    Console.print(
      `[${gameobj.getUpBridge()}]` + '\n' + `[${gameobj.getDownBridge()}]`
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameobj, gamecount, isWinorFail) {
    if (isWinorFail) {
      this.printWinResult(gamecount);
    } else {
      this.printLoseResult(gamecount);
    }
    Console.close();
  },

  printWinResult(gameCount) {
    Console.print(END_MESSAGE);
    Console.print(END_SUCCESS_MESSAGE);
    Console.print(GAME_COUNT_MESSAGE + gameCount);
  },

  printLoseResult(gameCount) {
    Console.print(END_MESSAGE);
    Console.print(END_FAIL_MESSAGE);
    Console.print(GAME_COUNT_MESSAGE + gameCount);
  },
};

module.exports = OutputView;
