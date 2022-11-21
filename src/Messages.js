const START_GAME = '다리 건너기 게임을 시작합니다.\n';
const USER_INPUT = {
  ENTER_LENGTH: '다리의 길이를 입력해주세요.\n',
  ENTER_MOVEMENT: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
}
const RETRY = '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';
const END_GAME = {
  RESULT: '\n최종 게임 결과',
  IS_SUCCESS: '\n게임 성공 여부: ',
  TOTAL_RETRY: '총 시도한 횟수: '
}
module.exports = {START_GAME, USER_INPUT, RETRY, END_GAME};