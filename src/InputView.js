const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(game) {
    Console.readLine(OutputView.printRequestBridgeLength, (reply) => {
      if (reply < 3 || reply > 20) {
        throw new Error("[ERROR] 다리의 길이는 3 이상 20 이하입니다.");
      }
      game.setBridge(reply);
      this.readMoving(game, []);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(game, input) {
    Console.readLine(OutputView.printRequestUserMove, (reply) => {
      if (reply !== "U" && reply !== "D") {
        throw new Error("[ERROR] 'U'와 'D'를 입력하여 이동할 수 있습니다.");
      }
      const newInput = reply === "U" ? 0 : 1;
      input.push(newInput);
      const answer = game.getBridge();
      OutputView.printMap(answer, input);
      const flag = game.move(input);
      flag ? this.readMoving(game, input) : this.readGameCommand(game, input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(game, input) {
    Console.readLine(OutputView.printRequestReplay, (reply) => {
      if (reply !== "R" && reply !== "Q") {
        throw new Error(
          "[ERROR] 'R'와 'Q'를 입력하여 게임 재실행 응답을 할 수 있습니다."
        );
      }
      if (reply === "Q") {
        const answer = game.getBridge;
        OutputView.printGameResult(false);
        input.pop();
        OutputView.printResult(answer, input);
        OutputView.printTryGame(0);
        return;
      }
      this.readMoving(game, []);
    });
  },
};

module.exports = InputView;
