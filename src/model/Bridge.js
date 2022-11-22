const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

class Bridge {
    bridge;

    constructor(size) {
        this.bridge = this.makeBridge(size);
    }

    makeBridge(size) {
        const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
        return bridge;
    }
}

module.exports = Bridge;
