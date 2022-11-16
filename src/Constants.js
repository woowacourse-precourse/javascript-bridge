const BRIDGE_MIN_LENGTH = 3;
const BRIDGE_MAX_LENGTH = 5;
const UP = 'U';
const DOWN = 'D';

const START_GAME = '다리 건너기 게임을 시작합니다.';
const INPUT_BRIDGE_LENGTH = '다리의 길이를 입력해주세요.';
const INPUT_MOVE_ROOM = '이동할 칸을 선택해주세요. (위: U, 아래: D)';
const INPUT_RETRY =
  '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)';
const GAME_RESULT = '최종 게임 결과';
const GAME_SUCCESS = '게임 성공 여부: 성공';
const GAME_COUNT = '총 시도한 횟수: ';

module.exports = {
  BRIDGE_MIN_LENGTH,
  BRIDGE_MAX_LENGTH,
  UP,
  DOWN,
  START_GAME,
  INPUT_BRIDGE_LENGTH,
  INPUT_MOVE_ROOM,
  INPUT_RETRY,
  GAME_RESULT,
  GAME_SUCCESS,
  GAME_COUNT,
};
