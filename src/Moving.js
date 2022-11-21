/* eslint-disable class-methods-use-this */
class Moving {
  #moving;

  constructor(moving) {
    this.validate(moving);
    this.#moving = moving;
  }

  validate(moving) {
    if (moving !== 'U' || moving !== 'D') {
      throw new Error('[ERROR] 이동은 U(위 칸)와 D(아래 칸) 중 하나의 문자만 입력하시길 바랍니다.');
    }
  }

  getMoving() {
    return this.#moving;
  }
}

module.export = Moving;
