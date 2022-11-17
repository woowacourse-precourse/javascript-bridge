const MissionUtils = require('@woowacourse/mission-utils');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class Bridge {
  #bridgeArray;
  constructor(length) {
    this.#bridgeArray = makeBridge(length, generate);
  }
}
module.exports = Bridge;
