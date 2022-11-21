const message = Object.freeze({
  INFORMATION: {
    gameStart: '다리 건너기 게임을 시작합니다.\n',
    inputBridgeSize: '다리의 길이를 입력해주세요.\n',
    inputMoving: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    inputGameCommand: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
    gameFinishResult: '최종 게임 결과',
    gameResult: '게임 성공 여부:',
    totalCount: '총 시도한 횟수:'
  },
  ERROR: {
    bridgeLengthRange: '[ERROR] 입력한 다리길이는 유효값에 포함되지 않습니다. 3과20사이의 숫자를 입력해주세요.',
    bridgeLengthNaN: '[ERROR] 입력한 값은 숫자가 아닙니다. 3과20사이의 숫자를 입력해주세요.',
    invalidMovingValue: '[ERROR] 올바른 값이 아닙니다. U(위) 또는 D(아래)를 입력해주세요.',
    invalidEndValue: '[ERROR] 올바른 값이 아닙니다. R(재시작) 또는 Q(종료)를 입력해주세요.'
  },
});

function deepFreeze(object) {
  var propNames = Object.getOwnPropertyNames(object);

  for (let name of propNames) {
    let value = object[name];

    object[name] = value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

deepFreeze(message);

module.exports = message;
