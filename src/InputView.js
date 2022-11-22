const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const {
  validateBridgeLength,
  validateDirection,
  validateCommand,
} = require("./Exceptions");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(
      "다리의 길이를 입력해주세요.\n",
      function (length) {
        length = Number(length);
        try {
          validateBridgeLength(length);
          const bridgeGame = new BridgeGame(length);
          this.readMoving(bridgeGame);
        } catch (err) {
          Console.print(err);
          this.readBridgeSize();
        }
      }.bind(InputView)
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      function (direction) {
        try {
          validateDirection(direction);
          const [marking, isEnd] = bridgeGame.move(direction);
          OutputView.printMap(bridgeGame.board);
          this.makeResult(marking, isEnd, bridgeGame);
        } catch (err) {
          Console.print(err);
          this.readMoving(bridgeGame);
        }
      }.bind(InputView)
    );
  },
  makeResult(marking, isEnd, bridgeGame) {
    if (isEnd === true && marking === true) this.finishGame(bridgeGame, "");
    else if (marking === false) this.readGameCommand(bridgeGame);
    else this.readMoving(bridgeGame);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      function (command) {
        try {
          validateCommand(command);
          this.executeCommand(command, bridgeGame);
        } catch (err) {
          Console.print(err);
          this.readGameCommand(bridgeGame);
        }
      }.bind(InputView)
    );
  },

  executeCommand(command, bridgeGame) {
    if (command === "R") {
      bridgeGame.retry();
      this.readMoving(bridgeGame);
    } else if (command === "Q") {
      this.finishGame(bridgeGame, command);
    }
  },

  finishGame(bridgeGame, command) {
    OutputView.printResult(bridgeGame.board, bridgeGame.count, command);
    Console.close();
  },
};

module.exports = InputView;
