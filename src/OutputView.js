const Io = require("./Io");

const SUCCESS = {
  true: "성공",
  false: "실패"
}
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage(){
    Io.output('다리 건너기 게임을 시작합니다.');
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(BridgeResultArray) {
    BridgeResultArray.forEach(element => {
      result = `[${element.join("|")}]`;
      Io.output(result);
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(BridgeResultArray, successResult, count) {
    Io.output('최종 게임 결과');
    this.printMap(BridgeResultArray);
    Io.output(`게임 성공 여부: ${SUCCESS[successResult]}`);
    Io.output(`총 시도한 횟수: ${count}`);
    Io.close();
  },
};

module.exports = OutputView;
