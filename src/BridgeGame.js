const term = require("./constants/term.js");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userMove, bridge) {}

  resultChar(target, character, index) {
    if (character === index) {
      if (character === target) {
        return "O";
      }
      if (character !== target) {
        return "X";
      }
    }
    if (character !== index) {
      return " ";
    }
  }

  upDownMap(userMove, index, bridge) {
    let answer = [];
    for (let i = 0; i < userMove.length - 1; i += 1) {
      const character = userMove[i];
      const target = bridge[i];
      answer.push(this.resultChar(target, character, index));
    }
    const character = userMove[userMove.length - 1];
    const target = bridge[userMove.length - 1];
    answer.push(this.resultChar(target, character, index));
    return answer;
  }

  characterUpDownCheck(input) {
    const resultUpDown = term.AVAILABLE_INPUT_ARRAY.filter(
      (item) => item === input
    );
    if (resultUpDown.length == 0) {
      return { isUpDown: false };
    }
    return { isUpDown: true, charUpDown: resultUpDown.join("") };
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    const resultRetryQuit = term.AVAILABLE_RETRY_QUIT_ARRAY.filter(
      (item) => item === input
    );
    if (resultRetryQuit.length == 0) {
      return { isRQ: false };
    }
    return { isRQ: true, charRQ: resultRetryQuit.join("") };
  }
}

module.exports = BridgeGame;
