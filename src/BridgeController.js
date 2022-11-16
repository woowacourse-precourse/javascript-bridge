const InputView = require('./InputView');
const bridgeValidation = require('./validation/bridgeValidation');
const movingValidation = require('./validation/movingValidation');
const { print } = require('./utils/MissionUtils');

class BridgeController {
  constructor() {
    this.#initPrint();
  }

  #initPrint() {
    print('다리 건너기 게임을 시작합니다.');
  }

  progressSize() {
    InputView.readBridgeSize((input) => {
      if (!bridgeValidation(input)) {
        catchError('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
        return this.progressSize();
      }
    });
  }

  progressMoving() {
    InputView.readMoving((input) => {
      if (!movingValidation(input)) {
        catchError('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
        return this.progressMoving();
      }
    });
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
