const { GAME_MESSAGE } = require("../Utils/Constants");
const { BRIDGE_LENGTH, MOVE, END } = GAME_MESSAGE;
const { readLine, print } = require("../Utils/MissionUtils");
const Validator = require("../Utils/Validator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(generateBridge) {
    readLine(BRIDGE_LENGTH, (size) => {
      try {
        new Validator().bridgeLength(size);
        generateBridge(size);
      } catch (error) {
        print(error);
        InputView.readBridgeSize(generateBridge);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    readLine(MOVE, (upOrDown) => {
      try {
        new Validator().userMovement(upOrDown);
        move(upOrDown);
      } catch (error) {
        print(error);
        InputView.readMoving(move);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(retry) {
    readLine(END, (restartOrQuit) => {
      try {
        new Validator().ending(restartOrQuit);
        retry(restartOrQuit);
      } catch (error) {
        print(error);
        InputView.readGameCommand(retry);
      }
    });
  },
};

module.exports = InputView;
