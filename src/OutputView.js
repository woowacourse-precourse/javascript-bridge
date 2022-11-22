const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(playerMovingRecord, isSuccess) {
    const upRecord = this.makeRecord(playerMovingRecord, isSuccess, 'U');
    const downRecord = this.makeRecord(playerMovingRecord, isSuccess, 'D');
    const upMap = this.makeMapOneline(upRecord);
    const downMap = this.makeMapOneline(downRecord);

    Console.print(upMap);
    Console.print(downMap);
  },

  makeRecord(playerMovingRecord, isSuccess, upOrDown){
    let gameRecord = "";
    for(let index = 0; index < playerMovingRecord.length - 1; index++){
      gameRecord = gameRecord + (upOrDown === playerMovingRecord[index] ? 'O' : ' ');
    }

    gameRecord = gameRecord + this.makeLastRecord(playerMovingRecord, isSuccess, upOrDown);

    return gameRecord;
  },
  
  makeLastRecord(playerMovingRecord, isSuccess, upOrDown){
    let lastRecord;
    if(isSuccess)
      lastRecord = (upOrDown === playerMovingRecord[playerMovingRecord.length - 1] ? 'O' : ' ');
    else
      lastRecord = (upOrDown === playerMovingRecord[playerMovingRecord.length - 1] ? 'X' : ' ');
      
    return lastRecord;
  },

  makeMapOneline(gameRecord){
    let map = '[ ' + gameRecord[0];
    for(let index =1; index < gameRecord.length; index++){
      map = map + ' | ' + gameRecord[index] ; 
    }

    map = map + ' ]';

    return map;
  },


  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(playerMovingRecord ,isFinish, attemptNumber) {
    Console.print(`최종 게임 결과`);   
    this.printMap(playerMovingRecord ,isFinish);
    
    const successOrFail = (isFinish ? `성공` : `실패`);
    Console.print(`게임 성공 여부: ${successOrFail}`);
    Console.print(`총 시도한 횟수: ${attemptNumber}`);
  },
};

module.exports = OutputView;
