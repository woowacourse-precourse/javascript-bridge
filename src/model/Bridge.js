const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

class Bridge {
    bridge;
    movingState;

    constructor(length) {
        this.bridge = this.makeBridge(length)
        this.movingState = {
            attempts: 1,
            currentLocation: 0,
            upState: [],
            downState: [],
        };
    }

    makeBridge(length) {
        const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);
        return bridge;
    }

    updateState(moving, result) {
        const mark = result ? 'O' : 'X';
        const [update, empty] = moving === 'U' ? ['upState', 'downState'] : ['downState', 'upState'];
        this.movingState = {
            ...this.movingState,
            currentLocation: this.movingState.currentLocation + 1,
            [update]: [...this.movingState[update], mark],
            [empty]: [...this.movingState[empty], ' ']
        }
    }

    resetMovingState() {
        this.movingState = {
            attempts: this.movingState.attempts + 1,
            currentLocation: 0,
            upState: [],
            downState: [],
        };
    }
}

module.exports = Bridge;
