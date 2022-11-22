const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

const OutputView = {

  printMap(playerMovingRecord, isSuccess) {
    const upRecord = this.makeRecord(playerMovingRecord, isSuccess, 'U');
    const downRecord = this.makeRecord(playerMovingRecord, isSuccess, 'D');
    const upMap = this.makeMapOneline(upRecord);
    const downMap = this.makeMapOneline(downRecord);

    Console.print(upMap);
    Console.print(downMap);
    Console.print("");  
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
    if(isSuccess) lastRecord = (upOrDown === playerMovingRecord[playerMovingRecord.length - 1] ? 'O' : ' ');
    else lastRecord = (upOrDown === playerMovingRecord[playerMovingRecord.length - 1] ? 'X' : ' ');
      
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


  printResult(playerMovingRecord ,isFinish, attemptNumber) {
    Console.print(`최종 게임 결과`);   
    this.printMap(playerMovingRecord ,isFinish);
    
    const successOrFail = (isFinish ? `성공` : `실패`);
    Console.print(`게임 성공 여부: ${successOrFail}`);
    Console.print(`총 시도한 횟수: ${attemptNumber}`);
  },
};

module.exports = OutputView;
