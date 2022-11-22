const SETTING = Object.freeze({

  BRIDGE_MIN : 3,
  BRIDGE_MAX : 20,
  UP : 'U',
  DOWN : 'D',
  QUIT : 'Q',
  RETRY : 'R',
  CAN_NOT_MOVE : 0,
  CAN_MOVE : 1,
  MOVE_COMPLETE : 2

})

const MESSAGE = Object.freeze({
  
  // In game
  GAME_START: "다리 건너기 게임을 시작합니다.\n",
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE_TO_WHERE: `이동할 칸을 선택해주세요. (위: ${SETTING.UP}, 아래: ${SETTING.DOWN})\n`,
  GAME_QUIT_OR_RETRY: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`,
  
  // Error
  BRIDGE_SIZE_NOT_NUMBER : "[ERROR] 다리 길이는 숫자로 입력해야 합니다.",
  BRIDGE_SIZE_OUT_OF_RANGE : `[ERROR] 다리 길이는 ${SETTING.BRIDGE_MIN}부터 ${SETTING.BRIDGE_MAX} 사이의 숫자여야 합니다.`,
  MOVING_NOT_VALID: `[ERROR] 이동할 칸은 ${SETTING.UP} 또는 ${SETTING.DOWN} 로 입력해야 합니다.`,
  OPTION_NOT_VALID: `[ERROR] 종료 옵션은 ${SETTING.RETRY} 또는 ${SETTING.QUIT} 로 입력해야 합니다.`

})

const MAP_ELEMENT = Object.freeze({

  NOTHING : ' ',
  RIGHT : 'O',
  WRONG : 'X',
  START : '[ ',
  END : ' ]\n',
  SEPERATOR : ' | '

})

const RESULT_ELEMENT = Object.freeze({

  SUCCESS : "성공",
  FAIL: "실패",
  GAMERESULT : "최종 게임 결과",
  GAME_ATTEMPTS: "총 시도한 횟수: ",
  IS_SUCCESS: "게임 성공 여부: "

})

module.exports = { SETTING, MESSAGE, MAP_ELEMENT, RESULT_ELEMENT };