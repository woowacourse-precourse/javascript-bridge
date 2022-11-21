const INPUT = Object.freeze({
  BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.\n',
  EITHER_UP_OR_DOWN: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY_OR_QUIT: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const OUTPUT = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  RESULT_TITLE: '최종 게임 결과',
  ISSUCCESS: (result) => `게임 성공 여부: ${result}`,
  TRIAL: (trial) => `총 시도한 횟수: ${trial}`,
});

module.exports = {
  INPUT,
  OUTPUT,
};
