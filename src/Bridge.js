const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
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
            throw new Error();

        if (size < 3 || size > 20)
            throw new Error();
    }
}

module.exports = Bridge;