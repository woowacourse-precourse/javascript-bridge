const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const { ERROR } = require('./Messages');
class Bridge {
    #bridge
    constructor(size) {
        this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    }

    getBridge() {
        return this.#bridge;
    }
}

module.exports = Bridge;