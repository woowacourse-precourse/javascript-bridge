const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("../constraints/constarints");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지의 이동 결과를 출력하는 함수
   * @param {*} game 현재 진행 중인 게임(인스턴스) 정보
   * @returns
   */
  printMap(game) {
    let result = [];
    for (let i = 0; i < game.progress.length; i++)
      result.push(`[ ${game.progress[i].join(" | ")} ]`);
    return Console.print(result.join("\n"));
  },

  /**
   * 게임의 최종 결과를 출력하는 함수
   * @param {*} game 현재 진행 중인 게임(인스턴스) 정보
   * @returns 결과 출력 후 콘솔을 종료
   */
  printResult(game) {
    let result = [];
    result.push(MESSAGES.RESULT.FINAL);
    for (let i = 0; i < game.progress.length; i++)
      result.push(`[ ${game.progress[i].join(" | ")} ]`);
    result.push(`${MESSAGES.RESULT.IS_SUCCEED[game.succeed]}`);
    result.push(`${MESSAGES.RESULT.TRY}${game.try}`);
    Console.print(result.join("\n"));
    return Console.close();
  },
};

module.exports = OutputView;
