const Console = require("../utils/Console");
const { INPUT } = require("./stringsUI");
const Validation = require("../utils/Validation");
const { INPUT_TYPE } = require("./stringsUI");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(gamePresenter) {
    Console.readLine(INPUT.GET_SIZE, (size) => {
      gamePresenter.handleInput(size, INPUT_TYPE.SIZE);
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(gamePresenter) {
    Console.readLine(INPUT.GET_MOVING, (selectedMove) => {
      gamePresenter.handleInput(selectedMove, INPUT_TYPE.MOVING);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gamePresenter) {
    Console.readLine(INPUT.GET_RETRY, (retry) => {
      gamePresenter.handleInput(retry, INPUT_TYPE.GAME_COMMAND);
    });
  },
};

module.exports = InputView;
