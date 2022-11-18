const BridgeService = require('../BridgeService');
const { ERROR_MESSAGE, REGEX, MODEL_KEY } = require('../../utils/constants');

class UpDownKey extends BridgeService {
  #input;

  constructor(input) {
    super();

    this.#input = input;
  }

  #getValidateData() {
    if (!REGEX.upDownKey.test(this.#input)) {
      throw new Error(ERROR_MESSAGE.upDownKey);
    }

    return this;
  }

  #updateUserBridge() {
    const oldData = this.getModelFor(MODEL_KEY.userBridge) || [];

    this.setModelFor(MODEL_KEY.userBridge, [...oldData, this.#input]);

    return this;
  }

  doAction() {
    this.#getValidateData().#updateUserBridge();
  }
}

module.exports = UpDownKey;
