const START_MESSAGE = '다리 건너기 게임을 시작합니다.';

const REQUEST_MESSAGE = Object.freeze({
  size: '\n다리의 길이를 입력해주세요.\n',
  direction: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retryOrQuit: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const CROSSING_RESULT_MESSAGE = Object.freeze({
  success: '성공',
  fail: '실패',
});

const ERROR_MESSAGE = Object.freeze({
  sizeRange: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  moveDirection: '[ERROR] 이동할 칸은 위 : U 또는 아래 : D인 문자로 입력해주세요.',
  retryOrQuitCommand: '[ERROR] 재시도는 R, 종료는 Q인 문자로 입력해주세요.',
});

const RESULT_MESSAGE = Object.freeze({
  finalGameResult: '최종 게임 결과',
  crossingResult: (result) => `게임 성공 여부: ${result}`,
  totalNumberOfAttempts: (attemps) => `총 시도한 횟수: ${attemps}`,
});

module.exports = {
  START_MESSAGE,
  REQUEST_MESSAGE,
  CROSSING_RESULT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
};
