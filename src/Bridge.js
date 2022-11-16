const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const { ERROR } = require('./Messages');
class Bridge {
    #bridge
    constructor(size) {
        this.vaildateSize(size);
        this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    }

    getBridge() {
        return this.#bridge;
    }

    vaildateSize(size) {
        if (isNaN(size))
            throw new Error(ERROR.BRIDGE_SIZE_NOT_NUMBER);

        if (size < 3 || size > 20)
            throw new Error(ERROR.BRIDGE_SIZE_NOT_NUMBER);
    }
}

module.exports = Bridge;