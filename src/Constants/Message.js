const INPUT_MESSAGE = {
  start: '다리의 길이를 입력해주세요.\n',
  move: '이동할 칸을 선택해주세요. (위: U, 아래 : D)\n',
  retry: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const RESULT_MESSAGE = {
  announce: '최종 게임 결과',
  clear: '\n게임 성공 여부: 성공\n',
  fail: '\n게임 성공 여부: 실패\n',
  tried: '총 시도한 횟수: ',
};

module.exports = {
  INPUT_MESSAGE,
  RESULT_MESSAGE,
};
