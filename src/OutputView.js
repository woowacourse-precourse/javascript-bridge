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
  printMap(gameStatus, direction) {
    const playHistory = this.printPlayHistory(gameStatus);
    const upperHistory = this.printUpperHistory(playHistory);
    const lowerHistory = this.printLowerHistory(playHistory);
    console.log(upperHistory);
    console.log(lowerHistory);
    // InputView.readMoving();
  },

  printPlayHistory(gameStatus) {
    const playHistory = [];
    for (let step = 0; step < gameStatus.currentPosition; step += 1) {
      if (gameStatus.bridge[step]) playHistory.push(['O', ' ']);
      if (!gameStatus.bridge[step]) playHistory.push([' ', 'O']);
    }
    return playHistory;
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
  printResult() {},
};

module.exports = OutputView;
