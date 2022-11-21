
class BridgeResult {
    #upBridgeReultArr;
    #downBridgeReultArr;
    #gameResult;
    #tryCount;

    constructor(upBridgeReultArr, downBridgeReultArr, gameResult, tryCount) {
        this.#upBridgeReultArr = upBridgeReultArr;
        this.#downBridgeReultArr = downBridgeReultArr;
        this.#gameResult = gameResult;
        this.#tryCount = tryCount;
    }

    get upBridgeReultArr() {
       return this.#upBridgeReultArr; 
    }
    get downBridgeReultArr() {
        return this.#downBridgeReultArr;
    }
    get gameResult() {
        return this.#gameResult;
    }
    get tryCount() {
        return this.#tryCount;
    }
}


module.exports = BridgeResult;
