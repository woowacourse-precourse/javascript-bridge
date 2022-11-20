const INPUT_MESSAGE = Object.freeze({
  bridge_size: '다리의 길이를 입력해주세요.\n',
  move: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retry: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.\n',
  result: '최종 게임 결과',
});

const RESULT_MESSAGE = Object.freeze({
  result: (res) => `게임 성공 여부: ${res}`,
  attempt_count: (count) => `총 시도한 횟수: ${count}`,
});

const ERROR_MESSAGE = Object.freeze({
  unexpected_input: '[ERROR] 잘못된 입력입니다.',
  exceed_bridge_size: '[ERROR] 다리 길이는 3~20의 입력만 가능합니다.',
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
};
