const BridgeService = require('../BridgeService');

const { REGEX, ERROR_MESSAGE, MODEL_KEY } = require('../../utils/constants');
const { makeBridge } = require('../../utils/BridgeMaker');
const BridgeRandomNumberGenerator = require('../../utils/BridgeRandomNumberGenerator');

class BridgeLength extends BridgeService {
  #input;

  constructor(input) {
    super();

    this.#input = input;
  }

  #getValidateData() {
    if (!REGEX.bridgeLength.test(this.#input)) {
      throw new Error(ERROR_MESSAGE.bridgeLength);
    }

    return this;
  }

  #createRandomBridgeData() {
    this.setModelFor(
      MODEL_KEY.randomBridge,
      makeBridge(Number(this.#input), BridgeRandomNumberGenerator.generate)
    );

    return this;
  }

  #createAnwerBrideData() {
    this.setModelFor(
      MODEL_KEY.answerBridge,
      Array.from({ length: this.#input }, () => null)
    );

    return this;
  }

  #createTryCountBridgeData() {
    this.setModelFor(MODEL_KEY.tryCount, 1);

    return this;
  }

  #createBridgeData() {
    this.#createRandomBridgeData()
      .#createAnwerBrideData()
      .#createTryCountBridgeData();
  }

  doAction() {
    this.#getValidateData().#createBridgeData();
  }
}

module.exports = BridgeLength;
