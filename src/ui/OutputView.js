const { Console } = require("@woowacourse/mission-utils");
const { MAKE_MAP, MOVE_VALID, RESULT_MESSAGES, SUCCESS } = require("../constants/constant");
const { GameInfo } = require("../domain/GameInfo");
const UseGameInfo = require("../domain/UseGameInfo");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(nextMove) {
    const output = [];
    GameInfo.moving = nextMove;
    output.push(UseGameInfo.makeOutput(0, nextMove));
    output.push(UseGameInfo.makeOutput(1, nextMove));
    Console.print(output[0].join(''));
    Console.print(output[1].join(''));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print(RESULT_MESSAGES.finalResult);
    GameInfo.position -= 1;
    this.printMap(GameInfo.moving);
    Console.print(RESULT_MESSAGES.gameResult(SUCCESS[GameInfo.gameResult]));
    Console.print(RESULT_MESSAGES.numberOfPlayGames(GameInfo.numberOfPlayGames));
    Console.close();
  },

  printError(error) {
    Console.print(error.message);
  },

  printMessage(message) {
    Console.print(message);
  }
};

module.exports = OutputView;
