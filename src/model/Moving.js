/* eslint-disable class-methods-use-this */
const { OutputView } = require('../view');

class Moving {
  #moving;

  #outputView;

  #close;

  constructor(moving) {
    const outputView = Object.create(OutputView);
    this.#outputView = outputView;
    this.validate(moving);
    this.#moving = moving;
  }

  validate(moving) {
    if (moving !== 'U' && moving !== 'D') {
      this.#close = true;
      this.#outputView.printError('[ERROR] 이동은 U(위 칸)와 D(아래 칸) 중 하나의 문자만 입력하시길 바랍니다.');
    }
  }

  getClose() {
    return this.#close;
  }

  getMoving() {
    return this.#moving;
  }
}

module.exports = Moving;
