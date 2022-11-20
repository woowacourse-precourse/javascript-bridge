const PRINT_MESSAGE = {
  STARTGAME: '다리 건너기 게임을 시작합니다.',
  TOTALRESULT: '최종 게임 결과',
  JUDGESUCESS(sucess) {
    return `게임 성공 여부: ${sucess ? '성공' : '실패'}`;
  },
  TOTALTRY(tryCount) {
    return `총 시도한 횟수: ${tryCount}`;
  },
};

const ERROR_MESSAGE = {
  NOT_NUMBER: '[ERROR] 숫자만 입력해주세요.',
  NOT_IN_RANGE(minimumRange, maximumRange) {
    return `[ERROR] 범위는 ${minimumRange} ~ ${maximumRange} 사이의 숫자여야 합니다.`;
  },
  NOT_ALPHABET: '[ERROR] 영어만 입력해주세요.',
  NOT_UPPERCASE: '[ERROR] 대문자여야 합니다.',
  NOT_IN_LIST(checkList) {
    return `[ERROR] ${checkList.join(', ')} 중 하나로 입력해주세요.'`;
  },
};

const ASK_MESSAGE = {
  INPUT_BRIDGESIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_MOVEMENT: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_GAMECOMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const BRIDGE_INFO = {
  IS_MOVEABLE: 'O',
  NOT_MOVEABLE: 'X',
  SHAPE(bridgeList) {
    return `[ ${bridgeList.join(' | ')} ]`;
  },
};

module.exports = { PRINT_MESSAGE, ERROR_MESSAGE, ASK_MESSAGE, BRIDGE_INFO };
