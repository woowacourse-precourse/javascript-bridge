const { deepFreeze } = require('./helper');

const MESSAGE = deepFreeze({
  gameStart: '다리 건너기 게임을 시작합니다.\n',
  gameCheckSuccess: '게임 성공 여부: ',
  gameCheckTryCount: '총 시도한 횟수: ',
  successMessage: '성공',
  failMessage: '실패',
  inputBridgeLength: '다리의 길이를 입력해주세요.\n',
  inputChooseNextStep: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  inputChooseRetry: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

module.exports = MESSAGE;
