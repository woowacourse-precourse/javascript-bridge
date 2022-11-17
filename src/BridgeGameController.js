const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임 진행 로직 함수
 */
class BridgeGameController {
    static makeNewBridgeGame(input) {
        return new BridgeGame(BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate));
    }
}

module.exports = BridgeGameController;