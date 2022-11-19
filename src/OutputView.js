const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(gameStatus) {
    const playHistory = this.printPlayHistory(gameStatus);
    const upperHistory = this.printUpperHistory(playHistory);
    const lowerHistory = this.printLowerHistory(playHistory);
    Console.print(upperHistory);
    Console.print(lowerHistory);
    // InputView.readMoving();
  },

  printPlayHistory({ bridge, currentPosition, liveOrDie }) {
    const playHistory = [];
    for (let step = 0; step <= currentPosition; step += 1) {
      if (bridge[step] === 'U') playHistory.push(['O', ' ']);
      if (bridge[step] === 'D') playHistory.push([' ', 'O']);
    }
    if (!liveOrDie)
      playHistory[currentPosition] = this.replaceLastStepOtoX(
        playHistory[currentPosition],
      );
    return playHistory;
  },

  replaceLastStepOtoX(lastStep) {
    const lastStepForReturn = lastStep;
    lastStepForReturn.splice(lastStepForReturn.lastIndexOf(' '), 1, 'X');
    lastStepForReturn.splice(lastStepForReturn.lastIndexOf('O'), 1, ' ');
    return lastStepForReturn;
  },

  printUpperHistory(playHistory) {
    const upperHistory = [];
    playHistory.map(history => {
      upperHistory.push(history[0]);
    });
    return `[ ${upperHistory.join(' | ')} ]`;
  },
  printLowerHistory(playHistory) {
    const lowerHistory = [];
    playHistory.map(history => {
      lowerHistory.push(history[1]);
    });
    return `[ ${lowerHistory.join(' | ')} ]`;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printSuccessOrNot({ liveOrDie }) {
    Console.print(liveOrDie ? '게임 성공 여부: 성공' : '게임 성공 여부: 실패');
  },

  printChalengeCount({ numberOfChallenge }) {
    Console.print(`총 시도한 횟수: ${numberOfChallenge}`);
  },

  printResult(gameStatus) {
    Console.print('최종 게임 결과');
    this.printMap(gameStatus);
    this.printSuccessOrNot(gameStatus);
    this.printChalengeCount(gameStatus);
  },
};

module.exports = OutputView;
