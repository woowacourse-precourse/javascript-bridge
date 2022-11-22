const INPUT_MESSAGE = Object.freeze({
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  moving: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retryOrQuit:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const ERROR_MESSAGE = Object.freeze({
  bridgeSizeOnlyNumber: '[ERROR] 다리 길이는 숫자만 입력해주세요.',
  bridgeSizeRange: '[ERROR] 다리 길이는 3이상 20이하의 숫자를 입력해주세요.',
  movingOnlyUOrD: '[ERROR] 위 칸은 U, 아래 칸은 D를 입력해주세요.',
  retryOnlyROrQ: '[ERROR] 재시작은 R, 종료는 Q를 입력해주세요.',
});

const PROCESS_MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.\n',
  result: '최종 게임 결과',
  successOrFailure: '게임 성공 여부:',
  tryCount: '총 시도한 횟수:',
});

module.exports = { INPUT_MESSAGE, ERROR_MESSAGE, PROCESS_MESSAGE };
