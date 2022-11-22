const {Console} = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

   setMap(game) {
    const map = Array.from({ length: 2 }, () => Array(game.state.length).fill(' '));
    game.state.forEach((isEqual, idx) => {
      const bridgePos = game.bridge[idx] === 'U' ? 0 : 1;
      if (isEqual === true){
        map[bridgePos][idx] = 'O';
        return;
      }
      map[1 - bridgePos][idx] = 'X';
    });
    return map;
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {BridgeGame} game 다리 건너기 게임
   */

  printMap(game) {
    let mapResult = this.setMap(game);

    mapResult.map((row) => {
      Console.print(`[ ${row.join(' | ')} ]`);
    });

  },
  


  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(game) {
    const isSuccess = game.state.every((isSuccess) => isSuccess);
    const result = isSuccess ? '게임 성공 여부: 성공' : '게임 성공 여부: 실패';
    let tryCount = game.tryCount += 1;

    Console.print('최종 게임 결과');
    this.printMap(game);
    Console.print(result);
    Console.print(`총 시도한 횟수: ${tryCount}`);
    Console.close();

  },
};

module.exports = OutputView;
