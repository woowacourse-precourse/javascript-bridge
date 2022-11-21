class Validator {
  REGEX_MAP = new Map([
    ['bridgeSize', /^([3-9]|1[0-9]|20)$/],
    ['moving', /^[UD]$/],
    ['gameCommand', /^[RQ]$/],
  ]);

  ERROR_MESSAGE_MAP = new Map([
    ['bridgeSize', '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.'],
    ['moving', `[ERROR] 다리 이동에 대한 입력은 'U'와 'D'만 가능합니다.`],
    ['gameCommand', `[ERROR] 게임 재시도 및 종료에 대한 입력은 'R'과 'Q'만 가능합니다.`],
    ['category', `[개발자] REGEX_MAP에 해당 카테고리가 등록되어 있지 않습니다.`],
  ]);

  check(category) {
    if (!this.REGEX_MAP.has(category)) {
      throw new Error(this.ERROR_MESSAGE_MAP.get(category), `(${category})`);
    }

    return (input) => {
      const testSubject = this.eraseWhiteSpace(input);
      const regex = this.REGEX_MAP.get(category);
      if (!regex.test(testSubject)) throw new Error(this.ERROR_MESSAGE_MAP.get(category));
    };
  }

  eraseWhiteSpace(input) {
    let result = input;
    return result.replace(' ', '');
  }

  checkBridgeSize = this.check('bridgeSize');

  checkMoving = this.check('moving');

  checkGameCommand = this.check('gameCommand');
}

module.exports = Validator;
