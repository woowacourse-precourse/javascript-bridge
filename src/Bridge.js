const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class Bridge {
    #length;

    constructor(length) {
        this.#length = length;
    }

    makeBridge() {
         const bridge = BridgeMaker.makeBridge(
            this.#length, 
            BridgeRandomNumberGenerator.generate
        );
    }
}

module.exports = Bridge;
