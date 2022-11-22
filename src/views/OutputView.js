const { Console } = require('@woowacourse/mission-utils');
const BridgeState = require('../domains/BridgeState');
const { OUTPUT_CONSTANTS, START_MESSAGE, MOVING_TYPE, ERROR_MESSAGE } = require('../constants');

/**
 * 잘못된 입력일 때, 마지막 입력에 X 마크를 넣는 함수
 * @param {Array<string>} upMoving U를 입력한 변수
 * @param {Array<string>} downMoving D를 입력한 변수
 * @returns
 */
function setWrongMark(upMoving, downMoving) {
  const userLastMoving = BridgeState.getUserLastMoving();
  const userLastIndex = BridgeState.getUserLastIndex();

  if (userLastMoving === MOVING_TYPE.UP) upMoving[userLastIndex] = OUTPUT_CONSTANTS.MARK.FAIL;
  if (userLastMoving === MOVING_TYPE.DOWN) downMoving[userLastIndex] = OUTPUT_CONSTANTS.MARK.FAIL;

  return [upMoving, downMoving];
}
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(START_MESSAGE);
  },

  addNewLine() {
    Console.print(OUTPUT_CONSTANTS.NULL);
  },

  /** 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다. */
  printMap() {
    const isSuccess = BridgeState.isSuccess();
    let [upMoving, downMoving] = BridgeState.getUserEachMoving();

    if (!isSuccess) {
      [upMoving, downMoving] = setWrongMark(upMoving, downMoving);
    }

    const { START, END, DELIMITER } = OUTPUT_CONSTANTS.BRIDGE;
    Console.print(`${START}${upMoving.join(DELIMITER)}${END}`);
    Console.print(`${START}${downMoving.join(DELIMITER)}${END}`);
  },

  /** 게임의 최종 결과를 정해진 형식에 맞춰 출력한다. */
  printResult() {
    const { INTRO_MESSAGE } = OUTPUT_CONSTANTS.GAME_RESULT;

    Console.print(INTRO_MESSAGE);

    this.printMap();
    this.addNewLine();
    this.printClearAndCount();
  },

  printClearAndCount() {
    const { SUCCESS_OR_NOT_MESSAGE, SUCCESS, FAIL, TRY_COUNT_MESSAGE } =
      OUTPUT_CONSTANTS.GAME_RESULT;

    const isClear = BridgeState.getIsClear();
    Console.print(`${SUCCESS_OR_NOT_MESSAGE}${isClear ? SUCCESS : FAIL}`);

    const tryCount = BridgeState.getTryCount();
    Console.print(`${TRY_COUNT_MESSAGE}${tryCount}`);
  },

  /**
   * 에러 메시지를 형식에 맞게 출력한다.
   * @param {string} errorMessage 에러 메시지
   */
  printError(errorMessage) {
    Console.print(`${ERROR_MESSAGE.HEADING} ${errorMessage}`);
  },

  close() {
    Console.close();
  },
};

module.exports = OutputView;
