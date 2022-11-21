const ErrorHandler = require("./ErrorHandler");
const {Console} = require("@woowacourse/mission-utils");
const Message = require("./Message");
const OutputView = require("./OutputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge, currentBridge, idx, move, count) {
    let isCorrect = false;
    [currentBridge, isCorrect] = OutputView.printMap(bridge, currentBridge, idx, move);
    idx++;
    if (isCorrect) {
      if (idx >= bridge.length) {
        Console.print(`${Message.RESULT_MESSAGE.RESULT_TEXT}`);
        currentBridge = OutputView.printMap(bridge, currentBridge, idx-1, move);
        OutputView.printResult('성공', count);
        return [idx];
      }
      else{
        return [idx];
      } 
    }
    else {
      return 0;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(bridge, command, currentBridge, idx, count) {
    if (command === 'R') {
      currentBridge = [[], []];
      idx = 0;
      count++;
      return [currentBridge, idx, count];
    }
    Console.print(`${Message.RESULT_MESSAGE.RESULT_TEXT}`);
    OutputView.printMap(bridge, currentBridge, idx, move);
    OutputView.printResult('실패', count);
    return false;
  }
}

const a = new BridgeGame();
a.move();

module.exports = BridgeGame;
