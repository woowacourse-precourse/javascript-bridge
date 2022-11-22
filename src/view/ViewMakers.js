const Message = {
  
  // In game
  GAME_START: "다리 건너기 게임을 시작합니다.\n",
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE_TO_WHERE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  GAME_QUIT_OR_RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  
  // Error
  BRIDGE_SIZE_NOT_NUMBER : "[ERROR] 다리 길이는 숫자로 입력해야 합니다.",
  BRIDGE_SIZE_OUT_OF_RANGE : "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  MOVING_NOT_VALID: "[ERROR] 이동할 칸은 U 또는 D 로 입력해야 합니다.",
  OPTION_NOT_VALID: "[ERROR] 종료 옵션은 R 또는 Q 로 입력해야 합니다."

}

const Map = {

  NOTHING : ' ',
  RIGHT : 'O',
  WRONG : 'X',

  makeMapEl(bridgeOne, movedOne){
    if(bridgeOne === movedOne){
      return this.RIGHT;
    }
    return this.WRONG;
  },

  makeLine(bridge, moved, upOrDown){
    const line = moved.map((movedOne, index) => {
      if(movedOne===upOrDown){
        return this.makeMapEl(bridge[index], movedOne);
      }
      return this.NOTHING;
    });
    return line;
  },

  makeMap(upLine, downLine){
    return `[ ${upLine.join(' | ')} ]\n[ ${downLine.join(' | ')} ]\n`;
  },

}

const Result = {

  SUCCESS : "성공",
  FAIL: "실패",

  GAMERESULT : "최종 게임 결과",
  GAME_ATTEMPTS: "총 시도한 횟수: ",
  IS_SUCCESS: "게임 성공 여부: ",

  makeStringResult(bridge, moved){
    if(JSON.stringify(bridge)===JSON.stringify(moved)){
      return this.SUCCESS;
    }
    return this.FAIL;
  }

}

module.exports = { Message, Map, Result };