const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, currentBridge, idx, move) {
    let isCorrect = false;
    if (move === "U") {
      if (bridge[idx] === move) {
        currentBridge[0].push("O");
        currentBridge[1].push(" ");
        isCorrect = true;
      }
      else {
        currentBridge[0].push("X");
        currentBridge[1].push(" ");
      }
    }

    else if (move === "D") {
      if (bridge[idx] === move) {
        currentBridge[1].push("O");
        currentBridge[0].push(" ");
        isCorrect = true;
      }
      else {
        currentBridge[1].push("X");
        currentBridge[0].push(" ");
      }
    }
    

    let up = "[ ";
    let down = "[ ";

    for (let i=0 ; i<= idx ; i++){
      up += currentBridge[0][i];
      down += currentBridge[1][i];

      if (i != idx) {
        up += " | ";
        down += " | ";
      }
    }
    up += " ]";
    down += " ]";

    Console.print(up);
    Console.print(down);

  

    return [currentBridge, isCorrect];    
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, count) {
    Console.print(`${Message.RESULT_MESSAGE.PASS_OR_NOT_TEXT} ${result}`);
    Console.print(`${Message.RESULT_MESSAGE.COUNT} ${count}`);
  },
};

module.exports = OutputView;
