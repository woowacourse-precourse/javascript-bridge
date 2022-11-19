const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { ERROR } = require('../Error');

/**
 * 다리 클래스
 */
class Bridge {
    #bridge
    /**
     * 다리 클래스 생성자
     * @param {number} size 다리 길이
     */
    constructor(size) {
        this.vaildateBridgeSize(size);
        this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    }

    /**
     * 다리 데이터를 반환
     * @returns {Array} ex) 길이가 3일 경우 ['U', 'D', 'U']
     */
    getBridge() {
        return this.#bridge;
    }

    /**
     * 다리 길이가 유효 값인지 확인하는 메서드
     * @param {number} size 다리 길이
     */
    vaildateBridgeSize(size) {
        if (isNaN(size))
            throw new Error(ERROR.BRIDGE_SIZE_NOT_NUMBER);
        if (size < 3 || size > 20)
            throw new Error(ERROR.BRIDGE_SIZE_OUT_BOUNDARY);
    }
}

module.exports = Bridge;