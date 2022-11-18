class BridgeService {
  #model;

  #OVERDING_ERROR = '[ERROR] 하위 메서드에 해당 메서드를 설정하세요';

  constructor() {
    this.#model = new Map();
  }

  getModelFor(key) {
    return this.#model.get(key);
  }

  setModelFor(key, value) {
    this.#model.set(key, value);
  }

  doAction() {
    throw new Error(this.#OVERDING_ERROR);
  }
}

module.exports = BridgeService;
