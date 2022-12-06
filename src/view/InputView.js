/*
 *제공된 InputView 객체를 활용해 구현해야 한다.
 *InputView의 파일 경로는 변경할 수 있다.
 *InputView의 메서드의 인자는 변경할 수 있다.
 *사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */

const { Console } = require("@woowacourse/mission-utils");
const ExceptionHandler = require("../utils/ExceptionHandler");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(game) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (size) => {
      try {
        ExceptionHandler.checkBridgeSize(size);
        game.init(size);
        InputView.readMoving(game);
      } catch (error) {
        OutputView.printError(error);
        InputView.readBridgeSize(game);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(game) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (direction) => {
        try {
          ExceptionHandler.checkDirection(direction);
          const isLastMove = game.move(direction);
          const result = game.getResult();
          OutputView.printMap(result);
          if (isLastMove) return OutputView.printResult(result);
          if (result.win) return InputView.readMoving(game);
          InputView.readGameCommand(game);
        } catch (error) {
          OutputView.printError(error);
          InputView.readMoving(game);
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(game) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (command) => {
        try {
          ExceptionHandler.checkGameCommand(command);
          if (command === "R") return game.retry();
          if (command === "Q") return OutputView.printResult(game.getResult());
        } catch (error) {
          OutputView.printError(error);
          InputView.readGameCommand(game);
        }
      }
    );
  },
};

module.exports = InputView;
