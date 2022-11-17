const GAME_MESSAGE = {
  PLAY_GAME: '다리 건너기 게임을 시작합니다.',
  INPUT_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  INPUT_UP_OR_DOWN: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ASK_REPLAY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  RESULT: '게임 성공 여부: ',
  NUMBERS_OF_PLAY: '총 시도한 횟수: ',
};
const BRIDGE = {
  START: '[ ',
  END: ' ]',
  BETWEEN: ' | ',
};

module.exports = { GAME_MESSAGE, BRIDGE };
