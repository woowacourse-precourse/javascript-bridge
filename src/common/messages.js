const INPUT_MESSAGES = {
  INPUT_BRIDGESIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const USER_VALID_INPUT = {
  U: 'U',
  R: 'R',
  D: 'D',
  Q: 'Q',
};

const BRIDGE_PRINT_WORD = {
  O: 'O',
  X: 'X',
  SPACE: ' ',
};

const OUTPUT_MESSAGES = {
  OUTPUT_STARTGAME: '다리 건너기 게임을 시작합니다.\n',

  OUTPUT_FINALCOUNT(count) {
    return `총 시도한 횟수: ${count}`;
  },
  OUTPUT_ISWINNING(isWinning) {
    return `게임 성공 여부: ${isWinning ? '성공' : '실패'}`;
  },
  OUTPUT_FINSHED: '최종 게임 결과',
};

const ERROR_MESSAGES = {
  ERROR_INVAILD_INPUT(word1, word2) {
    return `[ERROR] ${word1} 와 ${word2} 둘 중에 하나의 문자를 입력하세요.`;
  },
};

module.exports = {
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  ERROR_MESSAGES,
  USER_VALID_INPUT,
  BRIDGE_PRINT_WORD,
};
