class MovingValidator {
  constructor(moving) {
    this.validate(moving);
  }

  validate(moving) {
    if (this.isNull(moving)) throw new Error('[ERROR] 값을 입력해야 합니다.');
    if (!this.isAlphabet(moving)) throw new Error('[ERROR] 영어로 입력해야 합니다.');
    if (this.isNotRightRange(moving)) throw new Error('[ERROR] U or D 를 입력해야 합니다.');
    return moving;
  }

  isNull(moving) {
    return moving == '';
  }

  isAlphabet(moving) {
    const AlphabetTest = /^[a-zA-Z]*$/;
    return AlphabetTest.test(moving);
  }

  isNotRightRange(moving) {
    const range = /[^DU]{1,}/;
    return range.test(moving);
  }
}
module.exports = MovingValidator;
