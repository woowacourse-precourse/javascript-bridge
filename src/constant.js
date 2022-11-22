const GAME_MESSAGES = {
  START: '다리 건너기 게임을 시작합니다.',
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  INPUT_GAME_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  INPUT_GAME_RETRY:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  GAME_RESULT: '최종 게임 결과',
  GAME_WIN: '게임 성공 여부: 성공',
  GAME_LOSE: '게임 성공 여부: 실패',
  GAME_TRY: '총 시도한 횟수: ',
};

const ERROR_MESSAGES = {
  VALID_NUMBER: '[ERROR] 다리 길이는 숫자를 입력해야합니다.',
  VALID_BRIDGESIZE: '[ERROR] 다리 길이는 3이상 20이하의 수여야 합니다.',
  VALID_MOVE: `[ERROR] 이동할 칸은 'U' 또는 'D'로 입력해야합니다.`,
  VALID_COMMAND: `[ERROR] 게임 시도 여부는 'R' 또는 'Q'로 입력해야합니다.`,
};

module.exports = {
  GAME_MESSAGES,
  ERROR_MESSAGES,
};
