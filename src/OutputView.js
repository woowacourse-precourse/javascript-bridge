const MissionUtils = require("@woowacourse/mission-utils");
const BridegConverter = require("./BridgeConverter");
const Validation = require("./Validation");
const { Console } = MissionUtils;

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  },

  printMap(answer, inputs) {
    const bridge = BridegConverter.stringifyBridge(answer, inputs);
    Console.print(bridge);
  },

  /**
   * @param {string[]} answer : U와 D로 이루어진 정답을 가진 문자열 배열
   * @param {string[]} inputs :  U와 D로 이루어진 사용자의 입력값을 가진 문자열 배열
   * @param {number} trial : 사용자가 시도한 횟수
   */
  printResult(answer, inputs, trial) {
    const bridge = BridegConverter.stringifyBridge(answer, inputs);

    Console.print("최종 게임 결과");
    Console.print(bridge);
    Console.print(
      `게임 성공 여부: ${Validation.validateSucess(answer, inputs)}`
    );
    Console.print(`총 시도한 횟수: ${trial}`);
  },
};

module.exports = OutputView;
