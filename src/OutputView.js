const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printMap(userMoveInputCollection) {
    userMoveInputCollection.forEach(side => {
      Console.print(side);
    });
  },

  printResult(winOrLose, tryCount) {
    Console.print(`게임 성공 여부: ${winOrLose}\n총 시도한 횟수: ${tryCount}`);
  },

  printGameStartMsg() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printWrongInputOfBridgeLength() {
    Console.print('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n');
  },

  printWrongInputOfMoving() {
    Console.print('[ERROR] 다리 이동 입력은 "U"와 "D"만 가능합니다\n');
  },

  printWrongInputOfRetryOrQuit() {
    Console.print('[ERROR] (재시도: R, 종료: Q) R과 Q 하나만 입력해주세요');
  },
};

module.exports = OutputView;
