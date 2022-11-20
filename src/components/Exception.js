class Exception {
  static #validateNumber(input) {
    const notNumberReg = /[^0-9]/;
    if (notNumberReg.test(input)) {
      throw new Error('숫자만 입력하세요.');
    }
  }

  static #validateBridgeSize(input) {
    if (input < 3 || input > 20) {
      throw new Error('1 ~ 20 사이의 숫자를 입력하세요.');
    }
  }

  static #validateMoveInput(input) {
    const validInputs = ['U', 'D'];
    if (validInputs.includes(input)) {
      throw new Error('U 혹은 D만 입력하세요.');
    }
  }

  static #validateRestartInput(input) {
    const validRestarts = ['Q', 'R'];
    if (validRestarts.includes(input)) {
      throw new Error('Q 혹은 R만 입력하세요.');
    }
  }

  static bridgeSize(input) {
    this.#validateNumber(input);
    this.#validateBridgeSize(input);
  }

  static moveInput(input) {
    this.#validateMoveInput(input);
  }

  static restartInput(input) {
    this.#validateRestartInput(input);
  }
}
