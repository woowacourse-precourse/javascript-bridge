const GAME_MESSAGE = {
  start: '다리 건너기 게임을 시작합니다.\n',
  input_length: '다리의 길이를 입력해주세요.\n',
  choose_space: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  replay: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  result: '최종 게임 결과\n',
  is_success: '\n게임 성공 여부: ',
  total_attempts: '총 시도한 횟수: ',
  success: '성공',
  fail: '실패',
};

const ERROR_MESSAGE = {
  abstract_class: '추상 클래스로 인스턴스를 생성하였습니다.',
};

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
};
