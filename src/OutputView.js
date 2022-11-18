const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  printStart() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
  },
  
  
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(usersMove) {
    const mapSize = usersMove.length;
    let upMap = "[ ";
    let downMap = "[ ";

    for (mapIdx = 0; mapIdx < mapSize; mapIdx++) {
      const nowMove = usersMove[mapIdx];

      if ((nowMove[0] === 'U') && (nowMove[1] === 'O')) {
        upMap += 'O';
        downMap += ' ';
      } 
      
      if ((nowMove[0] === 'U') && (nowMove[1] === 'X')) {
        upMap += 'X';
        downMap += ' ';
      }
      
      if ((nowMove[0] === 'D') && (nowMove[1] === 'O')) {
        upMap += ' ';
        downMap += 'O';
      } 
      
      if ((nowMove[0] === 'D') && (nowMove[1] === 'X')) {
        upMap += ' ';
        downMap += 'X';
      }

      if (mapIdx !== (mapSize - 1)) {
        upMap += ' | ';
        downMap += ' | ';
      }
    }
    upMap += ' ]';
    downMap += ' ]';

    MissionUtils.Console.print(upMap);
    MissionUtils.Console.print(downMap, '\n');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(usersMove, gameOver, tryCount) {
    let checkForSuccess = '성공';    
    if (gameOver === true) {
      checkForSuccess = '실패'
    }

    MissionUtils.Console.print('최종 게임 결과');
    this.printMap(usersMove);
    MissionUtils.Console.print(`게임 성공 여부: ${checkForSuccess}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryCount}`);    
  },
};

module.exports = OutputView;
