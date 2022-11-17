const INPUT_MESSAGES = {
  bridge_length: '다리의 길이를 입력해주세요.\n',
  move: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retry: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const OUTPUT_MESSAGES = {
  start: '다리 건너기 게임을 시작합니다.\n',
  result: '최종 게임 결과',
};

const ERROR_MESSAGES = {
  unexpected_input: '[ERROR] 잘못된 입력입니다.',
};

module.exports = { INPUT_MESSAGES, OUTPUT_MESSAGES, ERROR_MESSAGES };
