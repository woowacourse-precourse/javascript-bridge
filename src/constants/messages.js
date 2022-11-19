const INPUT_MESSAGES = Object.freeze({
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  moveSpace: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  gameOver: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const OUTPUT_MESSAGES = Object.freeze({
  gameStart: '다리 건너기 게임을 시작합니다.\n',
  gameResult: '최종 게임 결과\n',
  tryCount(count) {
    return `총 시도한 횟수: ${count}`;
  },
  successOrFailure(isSuccess) {
    if (isSuccess) return '\n게임 성공 여부: 성공\n';
    return '게임 성공 여부: 실패\n';
  },
});

const ERROR_MESSAGES = Object.freeze({
  emptyInput: '[ERROR] 미입력 또는 공백은 입력할 수 없습니다. 다시 입력해주세요.\n',
  invalidRange: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다. 다시 입력해주세요.\n',
  invalidNumber: '[ERROR] 문자는 입력할 수 없습니다. 3부터 20사이의 숫자를 입력해주세요.\n',
  invalidMoveInput: '[ERROR] 대문자 U 또는 D만 입력할 수 있습니다. 다시 입력해주세요.\n',
  invalidGameOverInput: '[ERROR] 대문자 R 또는 Q만 입력할 수 있습니다. 다시 입력해주세요.\n',
});

module.exports = {
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  ERROR_MESSAGES,
};
