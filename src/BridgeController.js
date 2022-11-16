const InputView = require('./InputView');
const bridgeValidation = require('./validation/bridgeValidation');
const movingValidation = require('./validation/movingValidation');
const commandValidation = require('./validation/commandValidation');
const { print } = require('./utils/MissionUtils');

class BridgeController {
  constructor() {
    this.#initPrint();
  }

  #initPrint() {
    print('다리 건너기 게임을 시작합니다.');
  }
}

function catchError(error) {
  try {
    throw error;
  } catch (error) {
    print(error);
  }
}

module.exports = BridgeController;
