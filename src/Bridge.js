const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')

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