/*
 제공된 InputView 객체를 활용해 구현해야 한다.
 InputView의 `파일 경로`는 변경할 수 있다. 🙆‍♂️
 InputView의 메서드의 `인자`는 변경할 수 있다. 🙆‍♂️
 사용자 값 입력을 위해 필요한 `메서드`를 추가할 수 있다. 🙆‍♂️
 */
const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./OutputView');
const { MESSAGE } = require('./utils/constants');
const { Size, Moving, GameCommand } = require('./Commands');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * @param {string} message
   * @param {(input: string) => void} handler
   */
  read(message, handler) {
    Console.readLine(message, input => {
      try {
        handler(input);
      } catch (error) {
        OutputView.printError(error.message);
        InputView.read(message, handler);
      }
    });
  },

  /**
   * 다리의 길이를 입력받는다.
   * @param {(size: Size) => void} handleSize
   */
  readBridgeSize(handleSize) {
    InputView.read(MESSAGE.READ_BRIDGE_SIZE, size => {
      handleSize(new Size(size));
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {(moving: Moving) => void} handleMoving
   */
  readMoving(handleMoving) {
    InputView.read(MESSAGE.READ_MOVING, moving => {
      handleMoving(new Moving(moving));
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {(gameCommand: GameCommand) => void} handleGameCommand
   */
  readGameCommand(handleGameCommand) {
    InputView.read(MESSAGE.READ_GAME_COMMAND, gameCommand => {
      handleGameCommand(new GameCommand(gameCommand));
    });
  },

  closeView() {
    Console.close();
  },
};

module.exports = InputView;
