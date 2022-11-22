const INPUT_MESSAGE = Object.freeze({
  start: '다리의 길이를 입력해주세요.\n',
  move: '\n이동할 칸을 선택해주세요. (위 : U, 아래 : D)\n',
  retry: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const RESULT_MESSAGE = Object.freeze({
  announce: '최종 게임 결과',
  clear: '\n게임 성공 여부: 성공',
  fail: '\n게임 성공 여부: 실패',
  tried: '총 시도한 횟수: ',
});

const ERROR_MESSAGE = Object.freeze({
  wrongSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다. ',
  mustNumber: '[ERROR] 다리의 길이는 반드시 숫자여야 합니다. ',
  mustCharactor: '[ERROR] 입력 값은 반드시 문자여야 합니다. ',
  wrongMove: '[ERROR] 이동 값은 반드시 U 또는 D를 입력하여야 합니다. ',
  wrongCommand: '[ERROR] 재시도 여부는 반드시 R 또는 Q를 입력하여야 합니다. ',
});

module.exports = {
  INPUT_MESSAGE,
  RESULT_MESSAGE,
  ERROR_MESSAGE,
};
